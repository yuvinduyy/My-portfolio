import { useState, useEffect } from "react"

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      <nav className="pointer-events-auto bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-full px-6 py-3 transition-colors duration-300 shadow-sm dark:shadow-2xl flex justify-between items-center w-full max-w-4xl">
        <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white mr-8">
          YW
        </h1>

        <ul className="flex gap-4 md:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 items-center">
          <li className="hidden md:block"><a href="#home" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</a></li>
          <li className="hidden md:block"><a href="#about" className="hover:text-blue-600 dark:hover:text-white transition-colors">About</a></li>
          <li className="hidden md:block"><a href="#skills" className="hover:text-blue-600 dark:hover:text-white transition-colors">Skills</a></li>
          <li className="hidden md:block"><a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">Projects</a></li>
          <li className="hidden md:block"><a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact</a></li>
          
          <li className="md:ml-4 md:border-l md:pl-6 border-slate-200 dark:border-white/10">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition flex items-center justify-center w-10 h-10 text-lg"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? "💡" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar