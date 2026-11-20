import { links } from "../data/content";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#00111f] via-[#002037] to-[#0b4f6c] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contacts</h2>
         
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-300 mb-2">Phone</p>
              <a
                href={`tel:${links.phone.replace(/\s+/g, "")}`}
                className="text-lg text-white hover:text-[#09C3E7] transition-colors"
              >
                {links.phone}
              </a>
            </div>
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-wide text-slate-300 mb-2">Email</p>
              <a
                href={`mailto:${links.email}`}
                className="text-lg text-white hover:text-[#09C3E7] transition-colors sm:whitespace-nowrap"
              >
                {links.email}
              </a>
            </div>
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-wide text-slate-300 mb-2">LinkedIn</p>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:text-[#09C3E7] transition-colors sm:whitespace-nowrap"
              >
                linkedin.com/in/andrew-zhang-544b16296
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;