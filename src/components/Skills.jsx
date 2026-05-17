function Skills() {

  const skills = [
    "Java",
    "React",
    "Flutter",
    "JavaScript",
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "Tailwind",
    "GitHub"
  ]

  return (
    <section id="skills" className="py-32 px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-slate-900 dark:text-white font-heading">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full px-6 py-3 text-slate-700 dark:text-slate-200 font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills