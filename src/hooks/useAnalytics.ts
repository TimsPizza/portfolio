import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { API_CONFIG, type ApiResponse } from "../config/api";

type PingType = "init" | "hb" | "hop_to" | "end";
type Ids = {
  deviceId: string;
  sessionId: string;
};
type InitResponse = ApiResponse<Partial<Ids>>;

interface CommonBody {
  deviceId: string;
  sessionId: string;
  path?: string;
  ua?: string;
  referrer?: string;
  ts?: number;
}

const HEARTBEAT_INTERVAL_MS = 10000;

function getStoredDeviceId(): string | undefined {
  try {
    const id = localStorage.getItem("deviceId");
    return id ?? undefined;
  } catch {
    return undefined;
  }
}

function setStoredDeviceId(deviceId: string): void {
  try {
    localStorage.setItem("deviceId", deviceId);
  } catch {
    // ignore storage failures
  }
}

function isValidId(value: unknown): value is string {
  return typeof value === "string" && value.length >= 8 && value.length <= 128;
}

function clampString(
  value: string | undefined,
  max: number,
): string | undefined {
  if (typeof value !== "string") return undefined;
  return value.length > max ? value.slice(0, max) : value;
}

async function ping<T = unknown>(type: PingType, body?: unknown): Promise<T> {
  const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.analytics.ping}?type=${type}`;
  const payload = ((): Record<string, unknown> => {
    if (body && typeof body === "object" && !Array.isArray(body)) {
      const sanitized: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(body as Record<string, unknown>)) {
        if (v !== undefined) sanitized[k] = v;
      }
      return sanitized;
    }
    return {};
  })();
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: type === "end",
  });
  if (!res.ok) {
    throw new Error(`analytics ${type} failed: ${res.status}`);
  }
  try {
    return (await res.json()) as T;
  } catch {
    // some endpoints return { ok: true } — still valid JSON
    return {} as unknown as T;
  }
}

export function useAnalytics(): void {
  const location = useLocation();
  const sessionRef = useRef<Ids | null>(null);
  const lastPathRef = useRef<string | undefined>(undefined);
  const hbTimerRef = useRef<number | null>(null);

  // init on first mount
  useEffect(() => {
    let aborted = false;

    const startHeartbeat = () => {
      if (hbTimerRef.current) window.clearInterval(hbTimerRef.current);
      hbTimerRef.current = window.setInterval(() => {
        const s = sessionRef.current;
        if (!s) return;
        const body: CommonBody & { visible?: boolean } = {
          deviceId: s.deviceId,
          sessionId: s.sessionId,
          path: clampString(location.pathname, 2048),
          ts: Date.now(),
          visible: document.visibilityState === "visible",
        };
        ping("hb", body).catch(() => {});
      }, HEARTBEAT_INTERVAL_MS);
    };

    const getStoredIds = (): Ids | null => {
      try {
        const d = localStorage.getItem("deviceId");
        const s = localStorage.getItem("sessionId");
        if (isValidId(d) && isValidId(s)) {
          return { deviceId: d, sessionId: s } as Ids;
        }
      } catch {
        // ignore
      }
      return null;
    };

    const doInit = async () => {
      const deviceId = getStoredDeviceId();
      const initBody = {
        deviceId: isValidId(deviceId) ? deviceId : undefined,
        path: clampString(location.pathname, 2048),
        ua: clampString(navigator.userAgent, 2048),
        referrer: clampString(document.referrer || undefined, 2048),
        ts: Date.now(),
      };

      try {
        const res = await ping<InitResponse>("init", initBody);
        const ids = res.data || {};
        if (aborted) return;
        console.log("init response", res);
        // backend may only return deviceId if already known
        const next: Ids = {
          deviceId: (ids.deviceId as string) || getStoredDeviceId() || "",
          sessionId:
            (ids.sessionId as string) ||
            localStorage.getItem("sessionId") ||
            "",
        };
        if (isValidId(next.deviceId)) setStoredDeviceId(next.deviceId);
        if (isValidId(next.sessionId))
          localStorage.setItem("sessionId", next.sessionId);
        sessionRef.current = next;
        lastPathRef.current = location.pathname;
        startHeartbeat();
      } catch {
        // swallow; analytics must be non-fatal
      }
    };

    const bootstrap = async () => {
      const stored = getStoredIds();
      if (stored) {
        sessionRef.current = stored;
        lastPathRef.current = location.pathname;
      }
      await doInit();
      startHeartbeat();
    };
    bootstrap();

    return () => {
      aborted = true;
      if (hbTimerRef.current) window.clearInterval(hbTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // hop on route change
  useEffect(() => {
    const s = sessionRef.current;
    if (!s) return;
    const fromPath = lastPathRef.current;
    const toPath = location.pathname;
    if (fromPath === toPath) return;
    lastPathRef.current = toPath;
    const body: CommonBody & { fromPath?: string; toPath?: string } = {
      deviceId: s.deviceId,
      sessionId: s.sessionId,
      fromPath: clampString(fromPath, 2048),
      toPath: clampString(toPath, 2048),
      ts: Date.now(),
    };
    console.log("constructed body", body);
    ping("hop_to", body).catch(() => {});
  }, [location.pathname]);

  // graceful end
  // temporary disabled, use heartbeat only for now

  // useEffect(() => {
  //   const handler = () => {
  //     const s = sessionRef.current;
  //     if (!s) return;
  //     const body: CommonBody = {
  //       deviceId: s.deviceId,
  //       sessionId: s.sessionId,
  //       ua: clampString(navigator.userAgent, 2048),
  //       ts: Date.now(),
  //     };
  //     console.log("constructed end body", body);
  //     try {
  //       ping("end", body).catch(() => {});
  //     } catch (err) {}
  //   };

  //   const onVisibility = () => {
  //     if (document.visibilityState === "hidden") handler();
  //   };
  //   document.addEventListener("visibilitychange", onVisibility);
  //   window.addEventListener("pagehide", handler);

  //   return () => {
  //     document.removeEventListener("visibilitychange", onVisibility);
  //     window.removeEventListener("pagehide", handler);
  //   };
  // }, []);
}
