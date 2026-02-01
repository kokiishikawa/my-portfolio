"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { projects } from "@/data/projects";

// ヘッダーの高さ + 余白（レスポンシブ対応）
// Header.tsxのhandleClick内と同じ値を使用すること
const getHeaderOffset = () => {
  if (typeof window === "undefined") return 150;
  if (window.innerWidth <= 640) return 144;
  if (window.innerWidth <= 768) return 120;
  return 150;
};

export default function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // ブラウザのスクロール復元を無効化し、スクロール位置をリセット
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    if (isReload || !window.location.hash) {
      // リロード時、またはハッシュがない場合はトップにリセット
      // ブラウザの復元より後に実行されるよう複数タイミングで実行
      resetScroll();
      requestAnimationFrame(resetScroll);
      const timers = [0, 10, 50, 100, 200, 300].map(ms =>
        setTimeout(resetScroll, ms)
      );
      return () => timers.forEach(clearTimeout);
    } else {
      // 別ページからハッシュ付きで遷移した場合は一旦トップに（その後useEffectでスムーズスクロール）
      resetScroll();
    }
  }, []);

  // ハッシュがある場合、該当セクションへスムーズスクロール
  // 本番環境ではハイドレーションのタイミングが異なるため、複数回試みる
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToHash = () => {
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - getHeaderOffset(),
          behavior: "smooth",
        });
      }
    };

    // 複数タイミングでスクロールを試みる（本番環境対応）
    const timers = [50, 100, 200].map(ms => setTimeout(scrollToHash, ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ src, alt });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-[900px] mx-auto pb-10 px-5 flex-grow w-full" style={{ paddingTop: "144px" }}>
        <Profile />
        <Skills />

        <section id="projects" className="mb-15 scroll-mt-30 max-md:scroll-mt-[150px]">
          <h2 className="text-2xl text-[#1e3a5f] mb-6 pb-3 border-b-3 border-blue-500 inline-block font-bold">
            個人開発プロジェクト
          </h2>

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              badge={project.badge}
              images={project.images}
              techStack={project.techStack}
              description={project.description}
              links={project.links}
              onImageClick={openLightbox}
            />
          ))}
        </section>
      </main>

      <Footer />

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
