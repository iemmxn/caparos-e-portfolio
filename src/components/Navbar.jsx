import { useState } from "react";

function Navbar() {
  // true = mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg text-blue-400">
          Caparos
        </a>

        {/* menu button (only shows on small screens) */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* links on big screens */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* links on small screens, only shown when menuOpen is true */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-3 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-gray-300 hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
