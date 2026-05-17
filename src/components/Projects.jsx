function Projects() {

  const projects = [
    {
      title: "ELIX Band Website",
      desc: "Website for music band with chords, reviews, and merchandise.",
      tech: "HTML, CSS, JS, PHP"
    },
    {
      title: "Pulse Pro App",
      desc: "Fitness tracking mobile app for gym users.",
      tech: "Flutter, Supabase"
    },
    {
      title: "Pharmacy POS System",
      desc: "Java-based billing system for pharmacy management.",
      tech: "Java, MySQL"
    }
  ]

  return (
    <section id="projects" className="py-32 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-3">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {p.desc}
            </p>

            <p className="text-blue-400 text-sm">
              {p.tech}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects