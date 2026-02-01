"use client";

const navItems = [
  { href: "/#profile", label: "Profile" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

// ヘッダーの高さ + 余白（レスポンシブ対応）
// page.tsxのgetHeaderOffsetと同じ値を使用すること
const getHeaderOffset = () => {
  if (window.innerWidth <= 640) return 144;
  if (window.innerWidth <= 768) return 120;
  return 150;
};

export default function Header() {
  // トップページでのアンカーリンククリック時にスムーズスクロール
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;

    const hash = href.substring(1); // "/#profile" -> "#profile"
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - getHeaderOffset(),
          behavior: "smooth",
        });
        history.pushState(null, "", hash);
      }
    }
    // 別ページからの場合はデフォルト動作（ページ遷移）
  };

  return (
    <header className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white py-4 px-3 text-center fixed top-0 left-0 right-0 z-100">
      <nav className="flex justify-center gap-8 max-md:gap-4 max-sm:gap-5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-white no-underline text-[0.95rem] max-sm:text-base py-2 border-b-2 border-transparent hover:border-white/70 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
