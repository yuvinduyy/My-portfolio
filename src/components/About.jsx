import { motion } from "framer-motion"
function About() {
  return (
    <motion.section
      id="about"
      className="py-32 px-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-slate-900 dark:text-white font-heading">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            I am a Software Engineering undergraduate at KIU University.
            I love building full-stack applications, UI design, and solving real-world problems.
            I also have a strong background in music as a guitarist and violinist.
          </div>

          <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white font-heading">Highlights</h3>

            <ul className="space-y-4 text-slate-700 dark:text-slate-300 font-medium">

              <li className="flex items-center gap-3"><span className="text-2xl">🎓</span> Software Engineering Student</li>
              <li className="flex items-center gap-3"><span className="text-2xl">💻</span> Full Stack Developer</li>
              <li className="flex items-center gap-3"><span className="text-2xl">🎻</span> Visharadh Level Violinist</li>
              <li className="flex items-center gap-3"><span className="text-2xl">🎸</span> Professional Guitarist</li>

            </ul>

          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default About