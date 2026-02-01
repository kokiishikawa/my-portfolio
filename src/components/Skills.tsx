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
    skills: ["Git/GitHub", "Claude AI", "VS Code", "IntelliJ IDEA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-15 scroll-mt-30 max-md:scroll-mt-[150px]">
      <h2 className="text-2xl text-[#1e3a5f] mb-6 pb-3 border-b-3 border-blue-500 inline-block font-bold">
        技術スタック
      </h2>

      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="bg-white p-5 rounded-xl shadow-sm"
          >
            <h3 className="text-lg text-gray-600 mb-3 font-semibold">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-sky-100 text-sky-700 py-1.5 px-3.5 rounded-full text-sm font-medium"
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
