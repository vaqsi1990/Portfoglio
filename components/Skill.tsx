export type SkillProps = {
  name: string;
};

export default function Skill({ name }: SkillProps) {
  return (
    <div className="rounded-md border border-white/[0.06] bg-[#22252f]/90 px-5 py-4">
      <span className="md:text-[18px] text-[16px] font-medium text-white">{name}</span>
    </div>
  );
}
