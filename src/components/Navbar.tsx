"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/installation", label: "Installation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Promo strip */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-brand-500 text-white text-center py-2 px-4 text-sm font-medium">
        Save up to 58% on Ring Camera Bundles.{" "}
        <Link href="/products" className="underline font-bold">
          Shop Deals
        </Link>
      </div>

      {/* Nav */}
      <header
        className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-extrabold text-[#1a1a1a]">
              Smart<span className="text-brand-500">Space</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-brand-500"
                      : "text-[#555] hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/products"
                className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1a1a1a]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-[#eee] py-4 space-y-1 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-2 text-sm font-medium text-[#333] hover:text-brand-500"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block mt-3 text-center bg-brand-500 text-white font-semibold text-sm py-3 rounded-full"
              >
                Shop Now
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
