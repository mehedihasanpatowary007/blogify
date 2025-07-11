import Link from "next/link";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Blogify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <NavLink path="/">Home</NavLink>
          <NavLink path="/blogs">Blogs</NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <label
          htmlFor="navbar"
          className="md:hidden text-gray-700 cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </label>
      </div>
      <input id="navbar" type="checkbox" className="peer hidden" />

      {/* Mobile Menu Dropdown */}
      <div className="md:hidden absolute w-6/12 h-70 top-0 left-0 peer-checked:translate-y-0 -translate-y-100  duration-300 border-t bg-white border-gray-200 px-4 py-3 space-y-3 flex flex-col text-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Blogify
        </Link>
        <NavLink path="/" className="block mt-5">
          Home
        </NavLink>
        <NavLink path="/blogs" className="block">
          Blogs
        </NavLink>
      </div>
    </nav>
  );
}
