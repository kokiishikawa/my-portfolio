"use client";

import { useEffect, useState } from "react";

// ライト/ダークの切り替えボタン
// 実際のテーマは <html> の .dark クラスが担い、初期値は layout.tsx の
// インラインスクリプトが描画前に設定する。ここでは表示アイコンの同期と
// クリック時の切り替え + localStorage への保存だけを行う
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // マウント後に <html> の実際の状態を読んでアイコンを合わせる
  // (SSR 時点ではテーマが分からないため)
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors duration-300 cursor-pointer"
    >
      {dark ? (
        // 太陽アイコン(ダーク中 → ライトへ)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
        </svg>
      ) : (
        // 月アイコン(ライト中 → ダークへ)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
