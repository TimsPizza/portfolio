import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCplusplus,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import Card from "./Card";
import TextWithCheckbox from "./TextWithCheckbox";
import WithLineNumber from "./WithLineNumber";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";

const AboutMe = () => {
  const { leftRef, rightRef } = useEntranceAnimation({
    type: "about"
  });

  return (
    <div className="flex h-full w-full flex-row px-4">
      <div ref={leftRef} id="about-left" className="w-3/5 pr-3">
        <WithLineNumber leading="leading-7">
          <section className="leading-7 text-code-comment">
            <p className="font-bold">{`/* About Peisen Jiang`}</p>
            <p className="text-success">{`[Who am I]`}</p>
            <p>{`• An aspiring and ambitious web developer & hardware enthusiast.`}</p>
            <p className="text-info">{`[Where I from]`}</p>
            <p
              title="China :)"
              className="select-none transition-colors duration-200 hover:text-gray-400"
            >
              {`• A mysterious oriental country :)`}
            </p>
            <p className="text-code-number">{`[What do I do]`}</p>
            <p>{`• I make interactive & responsive web applications along with backend solutions, also am learning mobile development with react native/flutter.`}</p>
            <p className="m-1 text-warning">{`[My hobbies]`}</p>
            <p>{`• [Coding, Archery, Hiking, Gaming, Anime :3]`}</p>
            <p className="font-bold">{`*/ End, for now :p`}</p>
          </section>
        </WithLineNumber>
      </div>

      <div ref={rightRef} id="about-right" className="flex w-2/5 flex-col px-3">
        <span className="mt-3 text-code-comment">{`// Techs that I've been using or am learning`}</span>
        <span className="mt-3 text-code-comment">{`Programming Languages`}</span>
        <Card className="bg-[#111a27]">
          <TextWithCheckbox
            text="C/C++"
            checked={true}
            icon={<SiCplusplus className="text-[#7199cd]" />}
          />
          <TextWithCheckbox
            text="JavaScript"
            checked={true}
            icon={<SiJavascript className="text-[#ebda4d]" />}
          />
          <TextWithCheckbox
            text="Java"
            checked={true}
            icon={<FaJava className="text-[#f4f4f4]" />}
          />
          <TextWithCheckbox
            text="Go"
            checked={false}
            icon={<FaGolang className="scale-[120%] text-[#4ba4cc]" />}
          />
          <TextWithCheckbox
            text="Rust"
            checked={false}
            icon={<SiRust className="text-[#dd5627]" />}
          />
          <TextWithCheckbox
            text="Python"
            checked={true}
            icon={<SiPython className="text-[#527fad]" />}
          />
          <TextWithCheckbox
            text="Typescript"
            checked={true}
            icon={<SiTypescript className="text-[#4272ba]" />}
          />
        </Card>
        <span className="mt-3 text-code-comment">{`Frontend`}</span>
        <Card className="bg-[#111a27]">
          <TextWithCheckbox
            text="React.js"
            checked={true}
            icon={<SiReact className="text-[#61dafb]" />}
          />
          <TextWithCheckbox
            text="Next.js"
            checked={false}
            icon={<SiNextdotjs className="text-[#f7f7f7]" />}
          />
          <TextWithCheckbox
            text="TailwindCss"
            checked={true}
            icon={<SiTailwindcss className="text-[#5fb4eb]" />}
          />
          <TextWithCheckbox
            text="Bootstrap"
            checked={true}
            icon={<SiBootstrap className="text-[#771eec]" />}
          />
          <TextWithCheckbox
            text="Vite"
            checked={true}
            icon={<SiVite className="text-[#8d62ee]" />}
          />
          <TextWithCheckbox
            text="Radix-UI"
            checked={true}
            icon={<SiRadixui className="text-[#6f60ee]" />}
          />
          <TextWithCheckbox
            text="Material-UI"
            checked={false}
            icon={<SiMui className="text-[#377df7]" />}
          />
        </Card>
        <span className="mt-3 text-code-comment">{`Backend`}</span>
        <Card className="bg-[#111a27]">
          <TextWithCheckbox
            text="Node.js"
            checked={true}
            icon={<SiNodedotjs className="text-[#81ae64]" />}
          />
          <TextWithCheckbox
            text="FastApi"
            checked={true}
            icon={<SiFastapi className="text-[#45968a]" />}
          />
          <TextWithCheckbox
            text="MongoDB"
            checked={true}
            icon={<SiMongodb className="text-[#69e371]" />}
          />
          <TextWithCheckbox
            text="PostgreSQL"
            checked={false}
            icon={<SiPostgresql className="text-[#3e6389]" />}
          />
          <TextWithCheckbox
            text="Redis"
            checked={false}
            icon={<SiRedis className="text-[#c13b2c]" />}
          />
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
