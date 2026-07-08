import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | koki.ishikawa",
  description: "技術的な学びや日常について書いています。",
  openGraph: {
    title: "Blog | koki.ishikawa",
    description: "技術的な学びや日常について書いています。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | koki.ishikawa",
    description: "技術的な学びや日常について書いています。",
  },
};

// ビルド時に静的生成（高速化）
export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-svh">
      <Header />

      <main className="max-w-[900px] mx-auto pb-10 px-5 flex-grow w-full pt-32">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-ink font-semibold tracking-tight mb-3">Blog</h1>
          <p className="text-lg text-muted">技術的な学びや日常について</p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-surface p-10 rounded-3xl text-center">
            <p className="text-muted">記事がありません。</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-surface p-7 rounded-3xl transition-colors duration-300 no-underline hover:bg-[#e9e6db] dark:hover:bg-[#3a3936]"
              >
                <div className="flex justify-between items-start gap-4 mb-3 max-md:flex-col max-md:gap-1">
                  <h2 className="text-xl text-ink font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                  <span className="text-sm text-muted whitespace-nowrap">
                    {post.date}
                  </span>
                </div>
                <p className="text-ink/70 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-elevated text-ink/70 py-1 px-3 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
