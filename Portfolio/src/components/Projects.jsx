import { projects } from "../data/content";
import Reveal from "./Reveal";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Projects</h2>
          <p className="mt-3 text-slate-600">
            Selected projects and technical work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-1 bg-slate-300/70" aria-hidden="true" />
          <div className="space-y-8">
            {projects.map((project, i) => (
              <Reveal key={project.name}>
                <article className="relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#002037] ring-4 ring-slate-50 shadow-sm flex items-center justify-center text-white font-semibold">
                    {i + 1}
                  </div>
                  <div className="relative bg-white p-6 rounded-md shadow-sm border border-slate-200">
                    <div
                      className="absolute -left-2 top-5 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-[#0b7285] hover:text-[#002037] transition-colors"
                          >
                            View Repository
                          </a>
                        )}
                      </div>
                      <p className="text-slate-700 leading-relaxed">{project.description}</p>
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
