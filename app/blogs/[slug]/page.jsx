import { getSingleBlog } from "@/utils/get-blogs";
import { CalendarDays, FolderOpen, User } from "lucide-react";
import React from "react";

async function page({ params }) {
  const { slug } = await params;
  const blog = getSingleBlog(slug);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          {blog.author.name}
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          {blog.date}
        </div>
        <div className="flex items-center gap-1">
          <FolderOpen className="w-4 h-4" />
          {blog.category}
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none prose-headings:text-blue-700 prose-li:marker:text-green-500"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
}

export default page;
