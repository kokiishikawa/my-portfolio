import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      <main className="max-w-[900px] mx-auto py-10 px-5 min-h-[60vh]">
        <div className="mb-10">
          <h1 className="text-3xl text-[#1e3a5f] font-bold mb-2">Blog</h1>
          <p className="text-gray-600">技術的な学びや日々の開発について</p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white p-10 rounded-xl text-center">
            <p className="text-gray-600">記事がありません。</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 no-underline border-l-4 border-transparent hover:border-blue-500"
              >
                <div className="flex justify-between items-start gap-4 mb-3 max-md:flex-col max-md:gap-1">
                  <h2 className="text-xl text-[#1e3a5f] font-semibold group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {post.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs"
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
    </>
  );
}
