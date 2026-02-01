"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { projects } from "@/data/projects";

export default function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ src, alt });
  };

  return (
    <>
      <Header />

      <main className="max-w-[900px] mx-auto py-10 px-5">
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
    </>
  );
}
