import { Playfair_Display } from "next/font/google";
import Skill from "@/components/Skill";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const skills = [
  "Next.js",
  "React",
  "Tailwind",
  "Node.js",
  "Nest.js",
  "PostgreSQL",
] as const;

const languages = [
  { language: "Georgian", level: "fluently" },
  { language: "English", level: "B2" },
  { language: "Russian", level: "B2" },
] as const;

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 mt-14 px-4 sm:px-6"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl rounded-4xl border border-white px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 lg:px-8">
        <div>
         
          <h2
            id="skills-heading"
            className={` mx-auto uppercase  mt-3 max-w-3xl text-center text-[25px] leading-tight  text-white md:mt-4 md:text-[30px] lg:leading-[1.15]`}
          >
            My  Skill
          </h2>
         

          <div className="mt-10 grid gap-5  md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-5">
              {skills.slice(0, 3).map((name) => (
                <Skill key={name} name={name} />
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {skills.slice(3, 6).map((name) => (
                <Skill key={name} name={name} />
              ))}
            </div>
          </div>
        </div>

          
        <div
          className="mt-14 "
          aria-labelledby="languages-heading"
        >
            <h3
              id="languages-heading"
              className={` mx-auto uppercase  mt-3 max-w-3xl text-center text-[25px] leading-tight  text-white md:mt-4 md:text-[30px] lg:leading-[1.15]`}
            >
              Languages
            </h3>
          <div className="mt-2 md:mt-3">
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {languages.map(({ language, level }) => (
                <li
                  key={language}
                  className="flex items-center justify-between gap-4 rounded-md border border-white/[0.06] bg-[#22252f]/90 px-4 py-3.5 md:px-5 md:py-4"
                >
                  <span className="md:text-[20px] text-[16px] font-medium text-white">{language}</span>
                  <span className="shrink-0 md:text-[20px] text-[16px] tabular-nums text-white">{level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
