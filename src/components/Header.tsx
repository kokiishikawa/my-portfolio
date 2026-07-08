"use client";

import { getElementTop } from "@/lib/scroll";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/#profile", label: "Profile" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

// ヘッダーの高さ(48px) + 余白（全画面幅で一定）
// page.tsxのgetHeaderOffsetと同じ値を使用すること
const getHeaderOffset = () => 76;

export default function Header() {
  // トップページでのアンカーリンククリック時にスムーズスクロール
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;

    const hash = href.substring(1); // "/#profile" -> "#profile"
    const element = document.querySelector<HTMLElement>(hash);

    if (element) {
      e.preventDefault();
      window.scrollTo({
        top: getElementTop(element) - getHeaderOffset(),
        behavior: "smooth",
      });
      history.pushState(null, "", hash);
    }
    // 別ページからの場合はデフォルト動作（ページ遷移）
  };

  return (
    <header className="bg-paper/80 backdrop-blur-xl border-b border-ink/5 px-3 fixed top-0 left-0 right-0 z-100">
      <nav className="h-12 flex items-center justify-center gap-9 max-md:gap-6 max-sm:gap-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-xs tracking-wide text-ink/70 no-underline hover:text-ink transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
