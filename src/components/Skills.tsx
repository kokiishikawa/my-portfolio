const skillsData = [
  {
    category: "言語",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "フレームワーク",
    skills: ["React", "Next.js", "Django", "Spring Boot", "TailwindCSS"],
  },
  {
    category: "インフラ・DB",
    skills: ["PostgreSQL", "Docker", "AWS", "Vercel", "GitHub Actions"],
  },
  {
    category: "ツール・AI",
    skills: ["Git/GitHub", "Claude Code", "VS Code", "IntelliJ IDEA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl text-ink font-semibold tracking-tight mb-3">
        技術スタック
      </h2>
      <p className="text-lg text-muted mb-10">普段の開発で使っている言語とツールです。</p>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="bg-surface p-7 rounded-3xl"
          >
            <h3 className="text-lg text-ink mb-4 font-semibold tracking-tight">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-elevated text-ink/70 py-1.5 px-3.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
