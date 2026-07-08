import { notFound } from "next/navigation";
import type { Metadata } from "next"
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

// ビルド時に静的生成（高速化）
export const dynamic = "force-static";

export const dynamicParams = false; // 未知のslugは404

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | koki.ishikawa`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-svh">
      <Header />

      <main className="max-w-[900px] mx-auto pb-10 px-5 flex-grow w-full pt-32">
        <Link
          href="/blog"
          className="text-accent hover:underline text-sm mb-8 inline-block"
        >
          &larr; 記事一覧に戻る
        </Link>

        <article>
          <header className="mb-10 pb-8 border-b border-line">
            <h1 className="text-4xl text-ink font-semibold tracking-tight mb-4 max-md:text-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>{post.date}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface text-ink/70 py-1 px-3 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="blog-content">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
