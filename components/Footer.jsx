import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1D3557] text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Blogify</h2>
          <p className="text-gray-300">
            Blogify is your trusted source for web development tips, tools, and tutorials. Learn modern frontend skills with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-blue-300 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-200 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} Blogify. All rights reserved.
      </div>
    </footer>
  );
}
