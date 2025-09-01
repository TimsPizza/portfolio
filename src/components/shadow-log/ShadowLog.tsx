import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";

type OverlayProps = {
  onFinish: () => void;
};

const ShadowOverlay: React.FC<OverlayProps> = ({ onFinish }) => {
  const [isFading, setIsFading] = useState<boolean>(false);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(1);
  const [showFlare, setShowFlare] = useState<boolean>(false);
  const finishingRef = useRef<boolean>(false);
  const changeLineDisplayColor = (color: string) => {
    const lineRef = document.querySelectorAll(".shadow-tw-wrapper")?.[0] as
      | HTMLSpanElement
      | undefined;
    if (!lineRef) {
      console.error("failed to get typewritter ref.");
      return;
    }
    lineRef.style.color = color;
  };

  const deleteCurrentLineDisplay = () => {
    const lineRef = document.querySelectorAll(".shadow-tw-wrapper")?.[0] as
      | HTMLSpanElement
      | undefined;
    if (!lineRef) {
      console.error("failed to get typewritter ref.");
      return;
    }
    lineRef.innerHTML = "";
  };

  const finishOverlay = () => {
    if (finishingRef.current) return;
    finishingRef.current = true;
    setShowFlare(true);
    window.setTimeout(() => setOverlayOpacity(0), 50);
    window.setTimeout(() => onFinish(), 900);
  };

  const handleSkip = () => {
    finishOverlay();
  };

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-50 flex select-none items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.92)",
        opacity: overlayOpacity,
        transition: "opacity 800ms ease",
      }}
    >
      <button
        onClick={handleSkip}
        className="absolute right-4 top-4 rounded px-3 py-1 text-sm transition-colors"
        style={{
          color: "#cccccc",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      >
        skip &gt;
      </button>

      <div className="w-full max-w-3xl px-6">
        <div className="mx-auto w-full font-light tracking-wide">
          <div
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 600ms ease",
            }}
          >
            <Typewriter
              options={{
                delay: 30,
                autoStart: true,
                wrapperClassName: "shadow-tw-wrapper",
                cursorClassName: "hidden",
              }}
              onInit={(tw) => {
                tw.callFunction((state) => {
                  const w = state.elements.wrapper;
                  w.style.whiteSpace = "pre-wrap";
                  w.style.display = "block";
                })
                  .callFunction(() => {
                    changeLineDisplayColor("999");
                  })
                  .typeString("Congratulations. ")
                  .pauseFor(800)
                  .typeString("You've found the shadow log.")
                  .pauseFor(1600)
                  .callFunction(() => {
                    setIsFading(true);
                    deleteCurrentLineDisplay();
                  })
                  .pauseFor(600)
                  .callFunction(() => {
                    setIsFading(false);
                    changeLineDisplayColor("#bbb");
                  })

                  .typeString("Let's be honest.")
                  .pauseFor(900)
                  .typeString("\nMost personal sites are just highlight reels—")
                  .pauseFor(1000)
                  .typeString(
                    "\nPolished words, curated projects, optimized impressions.",
                  )
                  .pauseFor(1200)
                  .typeString(
                    "\nThey're made to impress recruiters, clients, strangers on the internet.",
                  )
                  .pauseFor(1500)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(800)
                  .callFunction(() => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                    changeLineDisplayColor("#ccc");
                  })
                  .typeString("We all curate our best selves, ")
                  .pauseFor(800)
                  .typeString("on LinkedIn, ")
                  .pauseFor(800)
                  .typeString("on résumés.")
                  .pauseFor(1200)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                    changeLineDisplayColor("#ccc");
                  })
                  .typeString("\nEven when it's fake.")
                  .pauseFor(800)

                  .typeString("\nEspecially when it's fake...")
                  .pauseFor(2200)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                    changeLineDisplayColor("#ddd");
                  })
                  .typeString("Right?")
                  .pauseFor(2000)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                  })

                  .typeString("But this space")
                  .pauseFor(1000)
                  .typeString("...")
                  .pauseFor(2000)

                  .typeString("\nThis space isn’t optimized for impressions.")
                  .pauseFor(2000)

                  .typeString("\nThis isn't the part that gets me hired.")
                  .pauseFor(700)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                  })

                  .changeDelay(15)
                  .typeString("This is the backend.")
                  .pauseFor(1500)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                  })
                  .typeString("My backend.")
                  .pauseFor(2000)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                  })

                  .typeString("> Unseen.")
                  .pauseFor(700)

                  .typeString("\n> Unpolished.")
                  .pauseFor(700)

                  .typeString("\n> Unfiltered.")
                  .pauseFor(1500)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                  })

                  .changeDelay(30)
                  .typeString("\nIf you've come this far...")
                  .pauseFor(1200)

                  .typeString("\nMaybe you're not just passing by.")
                  .pauseFor(1200)
                  .callFunction(() => {
                    setIsFading(true);
                  })
                  .pauseFor(600)
                  .callFunction((state) => {
                    setIsFading(false);
                    deleteCurrentLineDisplay();
                  })

                  .typeString(
                    "So, here's a look at the part that doesn't perform...",
                  )
                  .pauseFor(1200)

                  .typeString("\nThe part I only write for myself...")
                  .pauseFor(2000)
                  .callFunction(() => {
                    setShowFlare(true);
                  })
                  .pauseFor(750)
                  .callFunction(() => {
                    setOverlayOpacity(0);
                  })
                  .pauseFor(900)
                  .callFunction(() => {
                    if (!finishingRef.current) {
                      finishingRef.current = true;
                      onFinish();
                    }
                  })
                  .start();
              }}
            />
          </div>
        </div>
      </div>

      {showFlare && (
        <span
          className="pointer-events-none absolute h-24 w-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.25), rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%)",
            animation: "flare-out 900ms ease forwards",
          }}
        />
      )}

      <style>{`
        @keyframes flare-out {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const QA_DATA = [
  {
    id: "q1",
    question: "❯ doesn't he feel lonely?",
    answer: "→ maybe. he calls it silence. cheaper to carry, harder to break.",
  },
  {
    id: "q2",
    question: "❯ does he actually want to be understood?",
    answer: "→ no. but maybe he wants someone to try anyway.",
  },
  {
    id: "q3",
    question: "❯ why does he avoid praise?",
    answer: "→ praise feels like debt. useful but heavy. he’d rather be light.",
  },
  {
    id: "q4",
    question: "❯ what does he want?",
    answer: "→ not sure. maybe peace. maybe friction, sometimes.",
  },
  {
    id: "q5",
    question: "❯ is he broken?",
    answer: "→ only when forced to explain.",
  },
  {
    id: "q6",
    question: "❯ how do you like him?",
    answer: "→ enough to stop performing. enough to keep walking.",
  },
];

const ShadowQA: React.FC = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [typedNonce, setTypedNonce] = useState<Record<string, number>>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const reveal = (idx: number) => {
    const id = QA_DATA[idx].id;
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        setTypedNonce((n) => ({ ...n, [id]: (n[id] || 0) + 1 }));
      }
      return next;
    });
  };

  const handleHotkey: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      const opened = new Set(openIds);
      const nextIdx = QA_DATA.findIndex((q) => !opened.has(q.id));
      if (nextIdx !== -1) reveal(nextIdx);
    }
  };

  const allOpened = openIds.size === QA_DATA.length;

  return (
    <div
      className="min-h-full w-full select-none py-6"
      tabIndex={0}
      onKeyDown={handleHotkey}
    >
      <div className="mb-6">
        <p className="text-sm" style={{ color: "var(--theme-code-comment)" }}>
          {"> shadow_log_interpreter: self.introspection().trace()"}
        </p>
        <p className="text-xs" style={{ color: "var(--theme-text-gray)" }}>
          {"> [context: ctrl+enter or click to reveal next]"}
        </p>
      </div>

      <div className="space-y-5">
        {QA_DATA.map((item, idx) => (
          <div key={item.id} className="space-y-2">
            <button
              onClick={() => reveal(idx)}
              className="w-full text-left transition-colors"
              style={{ color: "var(--theme-code-keyword)" }}
            >
              {item.question}
            </button>

            {openIds.has(item.id) && (
              <div className="pl-4">
                <Typewriter
                  key={`${item.id}-${typedNonce[item.id] || 0}`}
                  options={{
                    autoStart: true,
                    delay: 24,
                    cursor: "",
                    wrapperClassName: "shadow-qa-ans",
                  }}
                  onInit={(tw) => {
                    tw.callFunction((state) => {
                      const w = state.elements.wrapper;
                      w.style.color = "var(--theme-code-comment)";
                      w.style.whiteSpace = "pre-wrap";
                    })
                      .typeString(item.answer)
                      .start();
                  }}
                />
              </div>
            )}
          </div>
        ))}

        {allOpened && (
          <div className="pl-4">
            <button
              className="underline decoration-dotted underline-offset-4 transition-colors hover:brightness-125"
              style={{ color: "var(--theme-code-comment)" }}
              onClick={() => setShowModal(true)}
            >
              {"→ oh, I also wrote something for him"}
            </button>
          </div>
        )}
      </div>

      {showModal && <PoemModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

const PoemModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { root: el, threshold: 0.2 },
    );
    const items = el.querySelectorAll("[data-fade-item]");
    items.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="poem-modal"
      className="fixed inset-0 left-1/2 top-1/2 z-50 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(2px)",
      }}
      onClick={onClose}
    >
      <div
        className="my-auto max-h-[80vh] w-full max-w-3xl overflow-auto rounded-md p-6"
        style={{
          backgroundColor: "var(--theme-background-dark)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        onClick={(e) => e.stopPropagation()}
        ref={containerRef}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm" style={{ color: "var(--theme-text-gray)" }}>
            {"// a note I wrote for him"}
          </p>
          <button
            onClick={onClose}
            className="rounded px-3 py-1 text-sm transition-colors hover:brightness-125"
            style={{ color: "var(--theme-code-keyword)" }}
          >
            close
          </button>
        </div>

        <div className="space-y-2">
          {[
            "Sometimes, he just sits.",
            "In front of the keyboard, the screen,",
            "a half-finished glass of something strong—",
            "as if waiting for something,",
            "or maybe nothing at all.",
            "",
            "He says he builds things of his own.",
            "He does.",
            "He’s good at building,",
            "better at dismantling,",
            "but best at walking away.",
            "",
            "He holds no grudge against noise.",
            "He simply doesn’t join.",
            "He’s not against conversation—",
            "silence is just his native tongue.",
            "You might think he’s cold.",
            "But he’s already calculated:",
            "ears that truly listen",
            "are rarer than words worth saying.",
            "",
            "His joys make no sound—",
            "solving a problem alone,",
            "framing a moment through glass,",
            "brewing a cup of tea to the exact degree.",
            "",
            "His sadness is the same—",
            "no sound, no witness.",
            "He doesn’t chase light.",
            "He makes his own.",
            "Sometimes dim.",
            "Never borrowed.",
            "",
            "He’s not without dreams.",
            "He just dislikes the word.",
            "He has structure,",
            "trajectory,",
            "a list of things to pursue,",
            "and a tombstone already etched.",
            "",
            "He’s not mysterious.",
            "He just withholds identity.",
            "When he appears,",
            "it’s not to be known.",
            "It’s just that,",
            "for a moment,",
            "your shadows happened to overlap beneath a passing streetlight.",
            "",
            "He, too, gets lonely.",
            "He just understands:",
            "Emptiness is still a form of presence.",
            "People only bring noise to it.",
          ].map((line, i) => (
            <p
              key={i}
              data-fade-item
              className="translate-y-2 opacity-0"
              style={{
                color: "var(--theme-code-comment)",
                transition: "opacity 700ms ease, transform 700ms ease",
              }}
            >
              {line === "" ? "\u00A0" : line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const PoemSection: React.FC = () => (
  <div className="mt-10">
    <section
      className="leading-7"
      style={{ color: "var(--theme-code-comment)" }}
    >
      <p>Sometimes, he just sits.</p>
      <p>In front of the keyboard, the screen,</p>
      <p>a half-finished glass of something strong—</p>
      <p>as if waiting for something,</p>
      <p>or maybe nothing at all.</p>
      <p>&nbsp;</p>
      <p>He says he builds things of his own.</p>
      <p>He does.</p>
      <p>He’s good at building,</p>
      <p>better at dismantling,</p>
      <p>but best at walking away.</p>
      <p>&nbsp;</p>
      <p>He holds no grudge against noise.</p>
      <p>He simply doesn’t join.</p>
      <p>He’s not against conversation—</p>
      <p>silence is just his native tongue.</p>
      <p>You might think he’s cold.</p>
      <p>But he’s already calculated:</p>
      <p>ears that truly listen</p>
      <p>are rarer than words worth saying.</p>
      <p>&nbsp;</p>
      <p>His joys make no sound—</p>
      <p>solving a problem alone,</p>
      <p>framing a moment through glass,</p>
      <p>brewing a cup of tea to the exact degree.</p>
      <p>&nbsp;</p>
      <p>His sadness is the same—</p>
      <p>no sound, no witness.</p>
      <p>He doesn’t chase light.</p>
      <p>He makes his own.</p>
      <p>Sometimes dim.</p>
      <p>Never borrowed.</p>
      <p>&nbsp;</p>
      <p>He’s not without dreams.</p>
      <p>He just dislikes the word.</p>
      <p>He has structure,</p>
      <p>trajectory,</p>
      <p>a list of things to pursue,</p>
      <p>and a tombstone already etched.</p>
      <p>&nbsp;</p>
      <p>He’s not mysterious.</p>
      <p>He just withholds identity.</p>
      <p>When he appears,</p>
      <p>it’s not to be known.</p>
      <p>It’s just that,</p>
      <p>for a moment,</p>
      <p>your shadows happened to overlap beneath a passing streetlight.</p>
      <p>&nbsp;</p>
      <p>He, too, gets lonely.</p>
      <p>He just understands:</p>
      <p>Emptiness is still a form of presence.</p>
      <p>People only bring noise to it.</p>
    </section>
  </div>
);

const ShadowLog = () => {
  const { leftRef, rightRef } = useEntranceAnimation({
    type: "lr",
  });
  const [overlayDone, setOverlayDone] = useState(false);

  return (
    <div className="relative flex min-h-full w-full overflow-x-hidden px-4">
      {!overlayDone && <ShadowOverlay onFinish={() => setOverlayDone(true)} />}
      <div ref={leftRef} id="shadow-log-left" className="w-full flex-1 lg:px-4">
        <ShadowQA />
      </div>
    </div>
  );
};

export default ShadowLog;
