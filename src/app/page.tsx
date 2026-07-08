"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { getElementTop } from "@/lib/scroll";

// ヘッダーの高さ(48px) + 余白（全画面幅で一定）
// Header.tsxのgetHeaderOffsetと同じ値を使用すること
const getHeaderOffset = () => 76;

export default function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const pagedProjects = projects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
      const element = document.querySelector<HTMLElement>(hash);
      if (element) {
        window.scrollTo({
          top: getElementTop(element) - getHeaderOffset(),
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
    <div className="flex flex-col min-h-svh">
      <Header />

      <main className="max-w-[900px] mx-auto pb-10 px-5 flex-grow w-full" style={{ paddingTop: "96px" }}>
        <Hero />
        <Reveal>
          <Profile />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>

        <section id="projects" className="mb-24 scroll-mt-24">
          <Reveal>
            <h2 className="text-4xl md:text-5xl text-ink font-semibold tracking-tight mb-3">
              個人開発プロジェクト
            </h2>
            <p className="text-lg text-muted mb-10">個人で設計・開発したプロジェクトです。</p>
          </Reveal>

          {pagedProjects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard
                title={project.title}
                badge={project.badge}
                images={project.images}
                techStack={project.techStack}
                description={project.description}
                links={project.links}
                onImageClick={openLightbox}
              />
            </Reveal>
          ))}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    const element = document.getElementById("projects");
                    if (element) {
                      window.scrollTo({
                        top: getElementTop(element) - getHeaderOffset(),
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                    page === currentPage
                      ? "bg-ink text-paper"
                      : "bg-surface text-muted hover:bg-ink/10"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
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
