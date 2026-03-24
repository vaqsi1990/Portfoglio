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
      className="scroll-mt-20 py-16 md:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div>
         
          <h2
            id="skills-heading"
            className={`${playfair.className} mx-auto mt-3 max-w-3xl text-center text-[30px] leading-tight font-bold text-white md:mt-4 lg:text-[44px] lg:leading-[1.15]`}
          >
            My Special Skill Field Here.
          </h2>
         

          <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:gap-8">
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
          className="mt-14 border-t  border-white/10 pt-14 md:mt-16 md:pt-16"
          aria-labelledby="languages-heading"
        >
            <h3
              id="languages-heading"
              className={`${playfair.className} mx-auto text-center mb-4 shrink-0 text-2xl font-bold text-white md:text-3xl`}
            >
              Languages
            </h3>
          <div className="mt-2 flex flex-col gap-6 md:mt-3 md:flex-row md:items-center md:gap-8 lg:gap-12">
            <ul className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3">
              {languages.map(({ language, level }) => (
                <li
                  key={language}
                  className="flex min-w-[10rem] flex-1 items-center justify-between gap-4 rounded-md border border-white/[0.06] bg-[#22252f]/90 px-5 py-4 sm:min-w-0 sm:flex-1"
                >
                  <span className="md:text-[18px] text-[16px] font-medium text-slate-400">{language}</span>
                  <span className="shrink-0 md:text-[18px] text-[16px] tabular-nums text-slate-300">{level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
