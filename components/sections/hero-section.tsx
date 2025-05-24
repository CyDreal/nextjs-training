export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
          Dito
        </h1>
        <p className="text-lg md:text-xl text-neutral-300">
          Frontend Developer & UI Designer
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#project"
            className="px-4 py-2 rounded-lg bg-neutral-200 text-neutral-900 hover:bg-neutral-300 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-200 hover:bg-neutral-200/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}