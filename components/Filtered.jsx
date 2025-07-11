"use client";
import { useRouter, useSearchParams } from "next/navigation";

function Filtered() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("order") || "newest";

  const handleChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("order", value);
    router.push(`?${params.toString().toLowerCase()}`);
  };
  return (
    <div className="text-blue-500  font-semibold text-xl">
      <select className="outline-none px-2 cursor-pointer" onChange={handleChange} value={currentSort} >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}

export default Filtered;
