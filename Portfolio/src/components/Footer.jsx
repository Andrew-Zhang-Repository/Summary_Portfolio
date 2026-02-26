import { links } from "../data/content";

function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-800">
      <div className="flex flex-wrap justify-center gap-8">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-100 transition-colors"
        >
          GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-100 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={links.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-100 transition-colors"
        >
          Resume
        </a>
        <a
          href={`mailto:${links.email}`}
          className="text-neutral-500 hover:text-neutral-100 transition-colors"
        >
          Email
        </a>
        <a
          href={`tel:${links.phone1}`}
          className="text-neutral-500 hover:text-neutral-100 transition-colors"
        >
          Australia Phone 
        </a>

         <a
          href={`tel:${links.phone2}`}
          className="text-neutral-500 hover:text-neutral-100 transition-colors"
        >
          New Zealand Phone
        </a>
      </div>
    </footer>
  );
}

export default Footer;
