import { profile } from "../data/content";

function Summary() {
  return (
    <section className="pt-24 pb-16 border-b border-neutral-800">
      <h1 className="text-4xl font-light tracking-tight text-neutral-100">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-neutral-400">{profile.title}</p>
      <p className="mt-6 text-neutral-300 leading-relaxed">
        {profile.summary}
      </p>
    </section>
  );
}

export default Summary;
