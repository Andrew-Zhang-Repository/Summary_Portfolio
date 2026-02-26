import { experience } from "../data/content";

function Components() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-light text-neutral-100 mb-8">Software Experience</h2>
      <div className="space-y-10">
        {experience.map((job, i) => (
          <div
            key={i}
            className="border-b border-neutral-800 pb-8 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-lg font-medium text-neutral-100">
                  {job.role}
                </h3>
                <p className="text-neutral-400">{job.company}</p>
              </div>
              <span className="text-sm text-neutral-500">{job.dates}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="text-neutral-300 text-sm pl-4 relative">
                  <span className="absolute left-0 text-neutral-600">-</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Components;
