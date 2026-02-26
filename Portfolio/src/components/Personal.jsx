import { useState } from "react";
import { personal } from "../data/content";

function Personal() {
  const [active, setActive] = useState(new Set());

  function toggle(i) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  }

  return (
    <section className="py-16">
      <h2 className="text-2xl font-light text-neutral-100 mb-4">
        {personal.heading}
      </h2>
      <p className="text-neutral-200 leading-relaxed mb-10">{personal.bio}</p>

      <div className="flex flex-col gap-6">
        {personal.hobbies.map((hobby, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
            {/* Button */}
            <button
              onClick={() => toggle(i)}
              className={`w-full md:w-[280px] h-auto md:h-[374px] px-6 text-left border-2 transition-colors md:shrink-0 flex flex-col justify-between py-6 ${
                active.has(i)
                  ? "border-white text-white"
                  : "border-neutral-300 text-neutral-200 hover:border-white hover:text-white"
              }`}
            >
              <span className="text-base font-semibold">{hobby.name}</span>
              {hobby.list && active.has(i) && (
                <ol className="mt-4 space-y-1">
                  {hobby.list.map((item, j) => (
                    <li key={j} className="flex items-baseline gap-2">
                      <span className="text-xs text-neutral-400">{j + 1}.</span>
                      <span className="text-sm text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ol>
              )}
              {hobby.images && (
                <span className="text-xs text-neutral-200">
                  {hobby.images.length} {hobby.images.length === 1 ? "photo" : "photos"}
                </span>
              )}
            </button>

            {/* Content — appears beside this button when active */}
            {active.has(i) && (
              <div className={`min-w-0 ${hobby.images && hobby.images.length > 1 ? "flex-1" : ""}`}>
                {hobby.images && hobby.images.length === 1 && (
                  <div className="w-full md:w-[280px] aspect-[3/4] md:aspect-auto md:h-[374px] overflow-hidden bg-neutral-600">
                    <img
                      src={hobby.images[0].src}
                      alt={hobby.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {hobby.images && hobby.images.length > 1 && (
                  <div className="grid grid-cols-2 md:flex gap-2 md:h-[374px]">
                    {hobby.images.map((img, j) => (
                      <div
                        key={j}
                        className="overflow-hidden bg-neutral-600 aspect-[3/4] md:aspect-auto md:flex-1 md:h-full"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Personal;
