import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const [typingStage, setTypingStage] = useState(0);

  return (
    <div className="flex h-full w-full items-center justify-center text-4xl">
      <div className="flex flex-col justify-center gap-10 px-20">
        <Typewriter
          options={{
            delay: 20,
            cursorClassName: "hidden",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "He is a perfectionist and has been working hard on his projects..",
              )
              .callFunction(() => {
                setTypingStage(1);
              })
              .pause()
              .start();
          }}
        />

        {typingStage >= 1 && (
          <Typewriter
            options={{
              delay: 20,
              cursorClassName: "hidden",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString(
                  "He will only list projects that he is truly proud of..",
                )
                .callFunction(() => {
                  setTypingStage(2);
                })
                .pause()
                .start();
            }}
          />
        )}

        {typingStage >= 2 && (
          <Typewriter
            options={{
              delay: 20,
              cursorClassName: "hidden",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString("So please check back later! :)")
                .callFunction(() => {
                  setTypingStage(3);
                })
                .pause()
                .start();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
