import { experience } from "../data/content";
import Reveal from "./Reveal";

function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Work Experience</h2>
          <p className="mt-3 text-slate-600">
            Professional roles and responsibilities.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-1 bg-slate-200" aria-hidden="true" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <Reveal key={`${item.company}-${item.role}-${i}`}>
                <article className="relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#002037] ring-4 ring-white shadow-sm flex items-center justify-center text-white font-semibold">
                    {i + 1}
                  </div>
                  <div className="relative bg-[#f5f5f6] p-6 rounded-md border border-slate-200">
                    <div
                      className="absolute -left-2 top-5 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-[#f5f5f6]"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                            <p className="text-[#0b7285] font-medium">{item.company}</p>
                          </div>
                          <span className="text-sm text-slate-600 font-medium">{item.dates}</span>
                        </div>
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="mt-3 space-y-2 text-slate-700">
                            {item.bullets.map((bullet, j) => (
                              <li key={j} className="pl-4 relative leading-relaxed">
                                <span className="absolute left-0 text-[#002037]">•</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {item.image && (
                        <div className="sm:w-40 md:w-48 shrink-0 sm:ml-auto">
                          <div className="w-full aspect-[4/3] bg-white border border-slate-200 rounded-md overflow-hidden flex items-center justify-center p-2">
                            <img
                              src={item.image}
                              alt={item.alt || `${item.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
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

export default Experience;
