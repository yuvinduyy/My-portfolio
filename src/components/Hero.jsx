function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="text-blue-400 text-lg mb-3">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Yuvindu Wickramaarachchi
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
        Software Engineering Undergraduate
      </h2>

      <p className="max-w-2xl text-gray-500 mb-8">
        Passionate developer building modern web and mobile applications with clean UI and strong backend logic.
      </p>

      <div className="flex gap-4">

        <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition">
          View Projects
        </a>

        <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-xl hover:border-white transition">
          Contact Me
        </a>

      </div>

    </section>
  )
}

export default Hero