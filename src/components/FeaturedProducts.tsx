import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(4);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors hidden sm:block"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/products"
            className="text-sm font-semibold text-brand-500"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
