import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />

      <main className="max-w-[900px] mx-auto pb-10 px-5 flex-grow w-full pt-36 max-md:pt-28 max-sm:pt-32">
        <Link
          href="/blog"
          className="text-blue-500 hover:underline text-sm mb-6 inline-block"
        >
          &larr; 記事一覧に戻る
        </Link>

        <article className="bg-white p-8 rounded-xl shadow-sm max-md:p-5">
          <header className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-3xl text-[#1e3a5f] font-bold mb-3 max-md:text-2xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{post.date}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-sky-100 text-sky-700 py-1 px-2 rounded text-xs"
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
