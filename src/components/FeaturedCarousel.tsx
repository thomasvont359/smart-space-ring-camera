"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Flame } from "lucide-react";
import { products } from "@/data/products";

const featured = products.filter((p) => p.featured);

export default function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="featured" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-500 font-semibold text-sm mb-3">
              <Flame className="h-4 w-4" />
              HOT DEALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              Featured Deals
            </h2>
            <p className="text-gray-500">
              Top picks and limited-time offers on Ring products
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-gray-100 hover:bg-brand-500 hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-gray-100 hover:bg-brand-500 hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        >
          {featured.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start bg-gradient-to-b from-brand-50 via-white to-white rounded-2xl border border-brand-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative p-8 flex items-center justify-center h-60 bg-gradient-to-b from-brand-50 to-transparent">
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-600">
                    &euro;{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      &euro;{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl transition-all text-sm shadow-sm hover:shadow-md">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
