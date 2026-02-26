import { projects } from "../data/content";

function Projects() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-light text-neutral-100 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-neutral-800 rounded-lg p-5 hover:border-neutral-600 transition-colors"
          >
            <h3 className="text-lg font-medium text-neutral-100">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
