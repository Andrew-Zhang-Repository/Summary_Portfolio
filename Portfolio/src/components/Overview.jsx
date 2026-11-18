import { overview } from "../data/content";

function Overview() {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {overview.map((item) => (
            <div key={item.title} className="flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden p-2">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
