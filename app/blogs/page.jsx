import Categories from "@/components/Categories";
import Filtered from "@/components/Filtered";
import { getBlogs, slugify } from "@/utils/get-blogs";
import { CalendarDays, FolderOpen, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Blogs({ searchParams }) {
  const blogs = getBlogs();
  const { order, category } = await searchParams;

  const selectedCategories = Array.isArray(category)
    ? category
    : category
    ? [category]
    : [];

  let filteredBlogs = blogs;

  if (selectedCategories.length > 0) {
    filteredBlogs = blogs.filter((blog) =>
      selectedCategories.some(
        (c) => c.toLowerCase() === blog.category.toLowerCase()
      )
    );
  }

  if (order === "oldest") {
    filteredBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className=" col-span-8 px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">All Blogs</h1>
        <div className="flex justify-end my-5">
          <div className=" border-2 border-blue-500 px-5">
            <Filtered />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog, i) => {
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
      </div>
      <div className="col-span-4">
        <Categories blogs={blogs} />
      </div>
    </div>
  );
}

export default Blogs;
