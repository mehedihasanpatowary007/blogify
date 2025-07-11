import { getBlogs, slugify } from "@/utils/get-blogs";
import { ArrowBigRight, CalendarDays, FolderOpen, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function LatestBlogs() {
  const blogs = getBlogs("newest");
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.slice(0, 4).map((blog, i) => {
          const slug = slugify(blog.title);
          return (
            <Link key={i} href={`/blogs/${slug}`}>
              <span className="group block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-4 mb-3">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                    height={40}
                    width={40}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800 flex items-center gap-1">
                      <User className="w-4 h-4" /> {blog.author.name}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" /> {blog.date}
                    </p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                  {blog.title}
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {blog.description.replace(/<[^>]+>/g, "").slice(0, 120)}...
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
                  <FolderOpen className="w-4 h-4" /> {blog.category}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Link
          className="group text-blue-500 flex items-center gap-2 mt-5 "
          href={"/blogs"}
        >
          {" "}
          <span className=" group-hover:underline">See More</span>{" "}
          <ArrowBigRight className="group-hover:translate-x-2 duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default LatestBlogs;
