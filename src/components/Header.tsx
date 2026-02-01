const navItems = [
  { href: "/#profile", label: "Profile" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white py-4 px-3 text-center sticky top-0 z-100">
      <nav className="flex justify-center gap-8 max-md:gap-4 max-sm:gap-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-white no-underline text-[0.95rem] max-sm:text-base py-2 border-b-2 border-transparent hover:border-white/70 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
