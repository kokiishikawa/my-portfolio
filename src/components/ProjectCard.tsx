"use client";

import Image from "next/image";

interface DescSection {
  title: string;
  content?: string;
  items?: string[];
}

interface ProjectProps {
  title: string;
  badge: string;
  images: { src: string; alt: string }[];
  techStack: string[];
  description: DescSection[];
  links: { github: string; demo?: string };
  onImageClick: (src: string, alt: string) => void;
}

export default function ProjectCard({
  title,
  badge,
  images,
  techStack,
  description,
  links,
  onImageClick,
}: ProjectProps) {
  return (
    <div className="bg-surface p-8 mb-6 rounded-3xl max-md:p-5">
      <div className="flex justify-between items-center mb-5 max-md:flex-col max-md:items-start max-md:gap-2">
        <h3 className="text-2xl text-ink font-semibold tracking-tight">{title}</h3>
        <span className="border border-black/10 text-muted py-1 px-3 rounded-full text-xs font-medium uppercase tracking-wide">
          {badge}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-4 max-md:grid-cols-1">
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-48 object-contain bg-white rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => onImageClick(image.src, image.alt)}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 my-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-elevated text-ink/70 py-1 px-3 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="my-5 leading-7">
        {description.map((section) => (
          <div key={section.title} className="mb-4">
            <h4 className="text-base text-ink mb-2 font-semibold">
              {section.title}
            </h4>
            {section.content && (
              <p className="text-ink/70 text-[0.95rem]">{section.content}</p>
            )}
            {section.items && (
              <ul className="ml-5 mt-2">
                {section.items.map((item, index) => (
                  <li key={index} className="text-ink/70 text-sm mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6 max-md:flex-col">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center py-2.5 px-6 rounded-full text-sm font-semibold no-underline transition-colors duration-300 bg-ink text-paper hover:bg-ink/85"
        >
          GitHub
        </a>
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-2.5 px-6 rounded-full text-sm font-semibold no-underline transition-colors duration-300 bg-elevated text-ink border border-ink/10 hover:bg-paper"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
