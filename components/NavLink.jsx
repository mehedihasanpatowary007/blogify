"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children }) {
    const pathname = usePathname();
    const isActive = pathname === path;
  return (
    <Link
      className={`${
        isActive
          ? "text-blue-500 font-bold border-2 px-2 py-1 border-blue-500"
          : "px-2 py-1"
      } cursor-pointer uppercase rounded-md`}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
