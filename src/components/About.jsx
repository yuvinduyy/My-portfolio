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

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="text-gray-400 leading-8">
            I am a Software Engineering undergraduate at KIU University.
            I love building full-stack applications, UI design, and solving real-world problems.
            I also have a strong background in music as a guitarist and violinist.
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-4">Highlights</h3>

            <ul className="space-y-3 text-gray-400">

              <li>🎓 Software Engineering Student</li>
              <li>🎸 Professional Guitarist</li>
              <li>🎻 Visharadh Level Violinist</li>
              <li>💻 Full Stack Developer</li>

            </ul>

          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default About