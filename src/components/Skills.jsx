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

      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills