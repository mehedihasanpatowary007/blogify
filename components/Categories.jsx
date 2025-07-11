"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
function Categories({ blogs }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("categoryList")) || [];
    const update = [...saved];

    blogs.forEach((blog) => {
      if (!update.includes(blog.category)) {
        update.push(blog.category);
      }
    });

    localStorage.setItem("categoryList", JSON.stringify(update));
    setCategories(update);
  }, [blogs]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategories = searchParams.getAll("category");

  const toggleCategory = (category) => {
    const params = new URLSearchParams(searchParams.toString());
    const isSelected = selectedCategories.includes(category);

    if (isSelected) {
      const updated = selectedCategories.filter((cat) => cat !== category);

      params.delete("category");
      updated.forEach((cat) => params.append("category", cat));
    } else {
      params.append("category", category);
    }
    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div className="sticky top-14">
      <div className=" h-screen px-4 pt-15 border-l-2 border-gray-500  shadow-2xl">
        <h2 className=" mb-5 text-xl font-semibold ">
          Discover more of what matters to you ?
        </h2>
        <div className="flex gap-4 flex-wrap">
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                onClick={() => toggleCategory(category)}
                className={`bg-gray-300 px-3 py-1 rounded-full border-2  cursor-pointer ${
                  selectedCategories.some((c) => c.toLowerCase() === category.toLowerCase())
                    ? "text-blue-500 border-blue-700 bg-white font-bold "
                    : "border-gray-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
