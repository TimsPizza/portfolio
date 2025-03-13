import { useEffect, useState } from "react";
import {
  API_CONFIG,
  type ApiResponse,
  type StatsResponse,
  type StatsUpdateType,
} from "../config/api";

interface UseStatsResult {
  stats: StatsResponse;
  loading: boolean;
  error: string | null;
  like: () => Promise<void>;
}

const defaultStats: StatsResponse = {
  views: 0,
  likes: 0,
};

export function useStats(): UseStatsResult {
  const [stats, setStats] = useState<StatsResponse>(defaultStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateStats = async (type: StatsUpdateType) => {
    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.stats.update}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type }),
        },
      );
      
      const data: ApiResponse<StatsResponse> = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to update stats");
      }

      setError(null);
      setStats(data.data);
      return data;
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to update stats",
      );
      throw error;
    }
  };

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.stats.get}`,
      );
      const data: ApiResponse<StatsResponse> = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load stats");
      }

      setStats(data.data);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to load stats");
      setStats(defaultStats);
    } finally {
      setLoading(false);
    }
  };

  // on mount
  useEffect(() => {
    fetchStats();
    // update view + 1
    updateStats("view").catch(() => {
      // ignore update failure
    });
  }, []);

  const like = async () => {
    try {
      await updateStats("like");
    } catch (error) {
      // error handled in updateStats
    }
  };

  return {
    stats,
    loading,
    error,
    like,
  };
}
