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
    <div>
      <select onChange={handleChange} value={currentSort} >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}

export default Filtered;
