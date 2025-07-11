import fs from "fs";
import path from "path";

//get all blogs
export const getBlogs = (order = "newest") => {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(fileData);
  return jsonData.sort((a, b) => {
    if (order.toLowerCase() === "oldest") {
      return new Date(a.date) - new Date(b.date);
    } else if (order.toLowerCase() === "newest") {
      return new Date(b.date) - new Date(a.date);
    }
  });
};

//make slug or segment
export const slugify = (title) => {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

// get single blog using slug
export const getSingleBlog = (slug) => {
  const blogs = getBlogs();
  return blogs.find((blog) => slugify(blog.title) === slug);
};
