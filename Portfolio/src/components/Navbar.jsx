const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#resume", label: "Resume" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contacts" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#002037]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="sr-only">
            Home
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm ml-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-slate-200 hover:text-[#09C3E7] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <details className="md:hidden relative ml-auto">
            <summary className="list-none cursor-pointer text-slate-200 hover:text-white px-3 py-2 border border-white/20 rounded">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-[#002037] border border-white/10 rounded shadow-lg py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-slate-200 hover:text-[#09C3E7] hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
