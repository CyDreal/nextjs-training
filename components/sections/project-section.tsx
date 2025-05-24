export const ProjectSection = () => {
  return (
    <section id="project" className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-200">My Projects</h2>
          <p className="text-neutral-400">Featured projects I've worked on</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div 
              key={project}
              className="rounded-lg border border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors"
            >
              <div className="aspect-video bg-neutral-900"></div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-neutral-200">Project {project}</h3>
                <p className="text-sm text-neutral-400">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex gap-2 pt-2">
                  <a 
                    href="#" 
                    className="text-sm text-neutral-200 hover:text-neutral-400 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}