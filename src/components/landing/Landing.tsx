import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";
import Balancer from "react-wrap-balancer";
import Typewriter from "typewriter-effect";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import BackgroundCanvas from "./BackgroundCanvas";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";
import { useStats } from "../../hooks/useStats";
import useToast from "../../hooks/useToast";

const Landing = () => {
  const { introRef, descriptionRef, contactRef, statsRef } =
    useEntranceAnimation({
      type: "landing",
    });

  const toast = useToast({
    autoClose: 3000,
  });
  const { stats, loading, error, like } = useStats();
  const [hasLiked, setHasLiked] = useState(false);

  // Trigger confetti effect function
  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleLike = async () => {
    if (!hasLiked) {
      try {
        await like();
        if (error) {
          setHasLiked(false);
          toast.error("Seems like there is an error, ooops!");
        } else {
          setHasLiked(true);
          toast.success("Thanks for liking my portfolio!");
          triggerConfetti();
        }
      } catch (error) {
        setHasLiked(false);
        toast.error("Seems like there is an error, ooops!");
      }
    } else {
      toast.info("You have already liked this portfolio! Thanks again! :)");
    }
  };

  return (
    <div className="relative h-full w-full" style={{ backgroundColor: 'var(--theme-background-dark)' }}>
      <div className="absolute inset-0 h-full w-full">
        <div className="h-full w-full opacity-30">
          <BackgroundCanvas />
        </div>
      </div>

      <div className="relative z-20">
        <div className="container ml-4 pt-10">
          {/* Introduction Section */}
          <div
            ref={introRef}
            className="flex flex-col items-center justify-center"
          >
            <div className="mt-8 flex w-full flex-col px-20">
              <span className="ml-4 mr-auto mt-2 block text-2xl font-light" style={{ color: 'var(--theme-text-light)' }}>
                Hi all, I am
              </span>
              <span className="ml-4 mr-auto mt-2 block text-5xl font-light" style={{ color: 'var(--theme-text-light)' }}>
                Peisen Jiang,
              </span>
              <Balancer>
                <span className="ml-4 mr-auto mt-2 block text-2xl font-light leading-8" style={{ color: 'var(--theme-code-keyword)' }}>
                  <Typewriter
                    options={{
                      loop: true,
                      autoStart: true,
                      delay: 50,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("> Web Developer")
                        .pauseFor(2500)
                        .deleteChars(13)
                        .typeString(" Hardware Enthusiast")
                        .pauseFor(2500)
                        .deleteChars(20)
                        .typeString(" Anime/Archery Lover")
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                </span>
              </Balancer>
            </div>
          </div>

          {/* Description Section */}
          <div
            ref={descriptionRef}
            className="mt-8 flex w-full flex-col gap-4 px-20"
          >
            <div className="ml-4 mt-6 max-w-2xl text-center text-xl">
              <p className="text-left" style={{ color: 'var(--theme-code-tag)' }}>{"<developer>"}</p>
              <p className="text-left" style={{ color: 'var(--theme-code-comment)' }}>
                {
                  "Design, Draft, Develop, Debug, Deploy, Document, and Drink Coffee."
                }
              </p>
              <p className="text-left" style={{ color: 'var(--theme-code-tag)' }}>{"</developer>"}</p>
            </div>

            <div className="ml-4 flex min-w-0 flex-wrap gap-2">
              {[
                "Web Dev",
                "Mobile Dev",
                "Machine Learning",
                "Data Analysis",
                "Full Stack",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{ borderColor: 'var(--theme-code-variable)' }}
                  className="cursor-default rounded-full border px-4 py-2 transition-colors hover:opacity-80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div
            ref={contactRef}
            className="ml-4 mt-8 flex flex-col items-center justify-start tracking-wide"
          >
            <p className="block w-full px-20 tracking-normal" style={{ color: 'var(--theme-code-comment)' }}>
              // my email
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span style={{ color: 'var(--theme-code-keyword)' }}>const</span>
              <span style={{ color: 'var(--theme-code-variable)' }}>email</span>
              <span style={{ color: 'var(--theme-text-light)' }}>=</span>
              <span style={{ color: 'var(--theme-code-string)' }}>
                "peisen.jiang2001@gmail.com"
              </span>
            </p>
            <p className="block w-full px-20 tracking-normal" style={{ color: 'var(--theme-code-comment)' }}>
              // my github
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span style={{ color: 'var(--theme-code-keyword)' }}>const</span>
              <span style={{ color: 'var(--theme-code-variable)' }}>github</span>
              <span style={{ color: 'var(--theme-text-light)' }}>=</span>
              <a
                className="underline underline-offset-4 transition-all duration-200 hover:brightness-125"
                style={{ color: 'var(--theme-code-string)' }}
                href="https://github.com/TimsPizza"
                target="_blank"
                rel="noopener noreferrer"
              >
                "https://github.com/TimsPizza"
              </a>
            </p>
            <p className="block w-full px-20 tracking-normal" style={{ color: 'var(--theme-code-comment)' }}>
              // my linkedin
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span style={{ color: 'var(--theme-code-keyword)' }}>const</span>
              <span style={{ color: 'var(--theme-code-variable)' }}>linkedin</span>
              <span style={{ color: 'var(--theme-text-light)' }}>=</span>
              <a
                className="underline underline-offset-4 transition-all duration-200 hover:brightness-125"
                style={{ color: 'var(--theme-code-string)' }}
                href="https://www.linkedin.com/in/timspizza/"
                target="_blank"
                rel="noopener noreferrer"
                title="timspizza is my nick name :)"
              >
                "https://www.linkedin.com/in/timspizza/"
              </a>
            </p>
            <p className="block w-full px-20 tracking-normal" style={{ color: 'var(--theme-code-comment)' }}>
              // my blog, comming soon!
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span style={{ color: 'var(--theme-code-keyword)' }}>const</span>
              <span style={{ color: 'var(--theme-code-variable)' }}>blog</span>
              <span style={{ color: 'var(--theme-text-light)' }}>=</span>
              <span style={{ color: 'var(--theme-code-string)' }}>"comming soon..."</span>
            </p>

            {/* Stats Section */}
            <div ref={statsRef} className="mt-4 flex w-full flex-col px-20">
              <div className="flex w-full flex-row items-center gap-8">
                <div className="flex items-center gap-2" style={{ color: 'var(--theme-text-gray)' }}>
                  <AiOutlineEye className="text-2xl" />
                  <span className="text-sm">Visits:</span>
                  <span>{stats.views}</span>
                </div>
                <button
                  onClick={handleLike}
                  className="flex items-center gap-2 brightness-125 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ color: 'var(--theme-code-tag)' }}
                  title={hasLiked ? "Thank you!" : "Like this portfolio"}
                >
                  {hasLiked ? (
                    <AiFillHeart className="text-2xl" />
                  ) : (
                    <AiOutlineHeart className="text-2xl" />
                  )}
                  <span className="text-sm" style={{ color: 'var(--theme-text-gray)' }}>Likes:</span>
                  <span>{loading ? "-" : stats.likes}</span>
                </button>
              </div>
              {error && (
                <div className="w-full">
                  <p className="mr-auto mt-2 inline-block text-center text-sm text-red-400">
                    {error}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
