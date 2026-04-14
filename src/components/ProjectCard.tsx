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
  links: { github: string; demo: string };
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
    <div className="bg-white p-7 mb-7 rounded-2xl shadow-sm border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md max-md:p-5">
      <div className="flex justify-between items-center mb-4 max-md:flex-col max-md:items-start max-md:gap-2">
        <h3 className="text-xl text-[#111827] font-bold tracking-tight">{title}</h3>
        <span className="border border-gray-300 text-gray-500 py-1 px-3 rounded-full text-xs font-medium uppercase tracking-wide">
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
            className="w-full h-48 object-contain bg-gray-50 rounded-lg border border-gray-200 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
            onClick={() => onImageClick(image.src, image.alt)}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 my-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-600 py-1 px-3 rounded-md text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="my-5 leading-7">
        {description.map((section) => (
          <div key={section.title} className="mb-4">
            <h4 className="text-base text-[#111827] mb-2 font-semibold">
              {section.title}
            </h4>
            {section.content && (
              <p className="text-gray-600 text-[0.95rem]">{section.content}</p>
            )}
            {section.items && (
              <ul className="ml-5 mt-2">
                {section.items.map((item, index) => (
                  <li key={index} className="text-gray-600 text-sm mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-5 max-md:flex-col">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center py-2.5 px-5 rounded-lg text-sm font-semibold no-underline transition-all duration-200 bg-gray-800 text-white hover:bg-gray-700"
        >
          GitHub
        </a>
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-2.5 px-5 rounded-lg text-sm font-semibold no-underline transition-all duration-200 border border-gray-900 text-gray-900 hover:bg-gray-50"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
