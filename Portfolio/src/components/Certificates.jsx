import { certifications } from "../data/content";
import Reveal from "./Reveal";

function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-[#f2f2f1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Certificates</h2>
          <p className="mt-3 text-slate-600">
            Certifications and completed training.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-1 bg-slate-300/70" aria-hidden="true" />
          <div className="space-y-8">
            {certifications.map((item, i) => (
              <Reveal key={item.name}>
                <article className="relative pl-16">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#002037] ring-4 ring-[#f2f2f1] shadow-sm flex items-center justify-center text-white font-semibold">
                    {i + 1}
                  </div>
                  <div className="relative bg-white p-6 rounded-md shadow-sm border border-slate-200">
                    <div
                      className="absolute -left-2 top-5 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                        <p className="text-slate-700 mt-3 leading-relaxed">{item.description}</p>
                      </div>
                      {item.image && (
                        <div className="sm:w-40 md:w-48 shrink-0 sm:ml-auto">
                          <div className="w-full aspect-[4/3] bg-slate-50 border border-slate-200 rounded-md overflow-hidden flex items-center justify-center p-2">
                            <img
                              src={item.image}
                              alt={`${item.name} logo`}
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

export default Certificates;
