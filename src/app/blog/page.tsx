import { posts } from "#site/content";
import { QueryPagination } from "../components/query-pagination";
import { sortPosts } from "../../../lib/utils";
import { Metadata } from "next";
import "../styles/blog.css";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 10;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );

  return (
    <div className="container max-w-3xl py-8 flex flex-row gap-8">
      {/* Main: Post List */}
      <main className="flex-1">
        <h1 className="font-bold text-2xl mb-2 font-terminus">Blog</h1>
        <p className="text-base text-gray-500 mb-4 font-terminus">
          these are my blogs.
        </p>
        <hr className="mb-4" />
        {displayPosts?.length > 0 ? (
          <ol className="space-y-2">
            {displayPosts.map((post, idx) => (
              <li key={post.slug} className="flex items-center gap-2 text-base">
                <span className="text-gray-400 w-6 text-right">
                  {POSTS_PER_PAGE * (currentPage - 1) + idx + 1}.
                </span>
                <a
                  href={`/${post.slug}`}
                  className="text-orange-600 hover:underline font-medium font-terminus"
                >
                  {post.title}
                </a>
                <span className="text-white text-xs ml-2 font-terminus">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <p>Nothing to see here yet</p>
        )}
        {/* <QueryPagination totalPages={totalPages} className="justify-end mt-4" /> */}
      </main>
    </div>
  );
}
