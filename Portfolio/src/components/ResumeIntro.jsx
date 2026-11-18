import { resumeIntro, links } from "../data/content";

function ResumeIntro() {
  return (
    <section id="resume" className="py-20 bg-[#002037] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {resumeIntro.heading}
        </h2>
        <p className="text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
          {resumeIntro.description}
        </p>
        <a
          href={links.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#09C3E7] text-[#002037] font-medium rounded hover:bg-[#35d4f2] transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeIntro;
