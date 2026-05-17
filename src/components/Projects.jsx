function Projects() {

  const projects = [
    {
      title: "ELIX Band Website",
      desc: "Website for music band with chords, reviews, and merchandise.",
      tech: "HTML, CSS, JS, PHP",
      link: "https://elix-gray.vercel.app/"
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
    },
    {
      title: "Flare Dating Application",
      desc: "A modern dating application with real-time features and seamless user matching.",
      tech: "Flutter, Dart, Supabase",
      link: "https://flare-dating-app-gp44.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="py-32 px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-slate-900 dark:text-white font-heading">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {projects.map((p, index) => {
          const cardContent = (
            <>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex justify-between items-center font-heading">
                {p.title}
                {p.link && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                )}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed text-lg">
                {p.desc}
              </p>

              <div className="inline-block bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-full self-start">
                {p.tech}
              </div>
            </>
          );

          const className = "group bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-2 shadow-sm hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-500 flex flex-col h-full cursor-pointer";

          return p.link ? (
            <a href={p.link} target="_blank" rel="noopener noreferrer" key={index} className={className}>
              {cardContent}
            </a>
          ) : (
            <div key={index} className={className.replace('cursor-pointer', '')}>
              {cardContent}
            </div>
          );
        })}

      </div>

    </section>
  )
}

export default Projects