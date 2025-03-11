import React from "react";
import { Link } from "react-router-dom";
import Balancer from "react-wrap-balancer";
import Typewriter from "typewriter-effect";
import BackgroundCanvas from "./BackgroundCanvas";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";

const Landing = () => {
  const { introRef, descriptionRef, contactRef } = useEntranceAnimation({
    type: "landing"
  });

  return (
    <div className="relative h-full w-full bg-gray-900">
      <div className="absolute inset-0 h-full w-full">
        <div className="h-full w-full opacity-30">
          <BackgroundCanvas />
        </div>
      </div>

      <div className="relative z-20">
        <div className="container mx-auto px-4 py-10">
          {/* Introduction Section */}
          <div ref={introRef} className="flex flex-col items-center justify-center">
            <div className="flex w-full flex-col px-20">
              <span className="ml-4 mr-auto mt-2 block text-2xl font-light text-gray-50">
                Hi all, I am
              </span>
              <span className="ml-4 mr-auto mt-2 block text-5xl font-light text-gray-50">
                Peisen Jiang,
              </span>
              <Balancer>
                <span className="ml-4 mr-auto mt-2 block text-2xl font-light leading-8 text-code-keyword">
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
          <div ref={descriptionRef} className="mt-8 flex w-full flex-col gap-4 px-20">
            <div className="ml-4 mt-6 max-w-2xl text-center text-xl text-gray-300">
              <p className="text-code-tag text-left">{"<developer>"}</p>
              <p className="text-left text-code-comment">
                {
                  "Design, Draft, Develop, Debug, Deploy, Document, and Drink Coffee."
                }
              </p>
              <p className="text-code-tag text-left">{"</developer>"}</p>
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
                  className="cursor-default rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-blue-400 transition-colors hover:bg-blue-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div ref={contactRef} className="ml-4 mt-8 flex flex-col items-center justify-start tracking-wide">
            <p className="block w-full px-20 tracking-normal text-code-comment">
              // my email
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span className="text-code-keyword">const</span>
              <span className="text-code-variable">email</span>
              <span className="text-white">=</span>
              <span className="text-code-string">
                "peisen.jiang2001@gmail.com"
              </span>
            </p>
            <p className="block w-full px-20 tracking-normal text-code-comment">
              // my github
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span className="text-code-keyword">const</span>
              <span className="text-code-variable">github</span>
              <span className="text-white">=</span>
              <a
                className="text-code-string underline underline-offset-4 transition-all duration-200 hover:brightness-125"
                href="https://github.com/TimsPizza"
              >
                "https://github.com/TimsPizza"
              </a>
            </p>
            <p className="block w-full px-20 tracking-normal text-code-comment">
              // my linkedin
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span className="text-code-keyword">const</span>
              <span className="text-code-variable">linkedin</span>
              <span className="text-white">=</span>
              <a
                className="text-code-string underline underline-offset-4 transition-all duration-200 hover:brightness-125"
                href="https://www.linkedin.com/in/timspizza/"
                title="timspizza is my nick name :)"
              >
                "https://www.linkedin.com/in/timspizza/"
              </a>
            </p>
            <p className="block w-full px-20 tracking-normal text-code-comment">
              // my blog, comming soon!
            </p>
            <p className="flex w-full flex-row items-center gap-4 px-20">
              <span className="text-code-keyword">const</span>
              <span className="text-code-variable">blog</span>
              <span className="text-white">=</span>
              <span className="text-code-string">"comming soon..."</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
