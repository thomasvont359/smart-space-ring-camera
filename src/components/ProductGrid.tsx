"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, categoryInfo, ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import clsx from "clsx";

const allCategories: (ProductCategory | "all")[] = [
  "all",
  "doorbell",
  "camera",
  "alarm",
  "bundle",
  "accessory",
];

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;
  const [active, setActive] = useState<ProductCategory | "all">(categoryParam || "all");

  useEffect(() => {
    if (categoryParam && allCategories.includes(categoryParam)) {
      setActive(categoryParam);
    }
  }, [categoryParam]);

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={clsx(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
              active === cat
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            )}
          >
            {cat === "all" ? "All Products" : categoryInfo[cat].label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 mb-6">
        Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12 text-lg">
          No products in this category yet. Check back soon!
        </p>
      )}
    </div>
  );
}
