import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="relative bg-[#fafafa] text-slate-800 dark:bg-[#050505] dark:text-slate-200 min-h-screen overflow-x-hidden transition-colors duration-500">

      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App