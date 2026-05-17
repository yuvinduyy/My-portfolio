function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

      <div className="max-w-3xl mx-auto text-center bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white font-heading">
          Let's Connect
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:yuvindu000@gmail.com" className="bg-blue-600 text-white font-medium px-8 py-4 rounded-full hover:bg-blue-700 hover:shadow-lg transition-all hover:-translate-y-1">
            Say Hello
          </a>
          <a href="https://www.linkedin.com/in/yuvindu-wickramaarachchi-00599b1ab/" target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-medium px-8 py-4 rounded-full hover:bg-slate-200 dark:hover:bg-white/20 transition-all hover:-translate-y-1">
            LinkedIn
          </a>
          <a href="https://github.com/yuvinduyy" target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-medium px-8 py-4 rounded-full hover:bg-slate-200 dark:hover:bg-white/20 transition-all hover:-translate-y-1">
            GitHub
          </a>
        </div>
      </div>

    </section>
  )
}

export default Contact