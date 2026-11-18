import { profile } from "../data/content";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#00111f] via-[#002037] to-[#0b4f6c]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(9,195,231,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <p className="text-[#09C3E7] uppercase tracking-[0.2em] text-sm mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-slate-200">
          {profile.title}
        </p>
      </div>
    </section>
  );
}

export default Hero;
