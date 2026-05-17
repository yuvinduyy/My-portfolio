import { motion } from "framer-motion"
import dp from "../assets/DP.JPG"

function Hero() {
  return (
    <motion.section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
>
      <motion.img 
        src={dp} 
        alt="Profile" 
        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white dark:border-[#111] shadow-2xl mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide uppercase text-sm mb-4">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white font-heading">
        Yuvindu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Wickramaarachchi</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
        Software Engineering Undergraduate
      </h2>

      <p className="max-w-2xl text-slate-500 dark:text-slate-400 mb-10 text-lg leading-relaxed">
        Passionate developer building modern web and mobile applications with clean UI and strong backend logic.
      </p>

      <div className="flex gap-4">

            <a
                href="#projects"
                className="bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1"
            >
                View Projects
            </a>

            <a
                href="#contact"
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium px-8 py-3.5 rounded-full hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
                Contact Me
            </a>

        </div>

    </motion.section>
  )
}

export default Hero