import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-[#f5f5f5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square flex items-center justify-center mb-4">
        {product.badge && (
          <span className="absolute top-0 left-0 bg-brand-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <h3 className="font-bold text-[#1a1a1a] text-sm mb-1.5 group-hover:text-brand-500 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-extrabold text-[#1a1a1a]">
          &euro;{product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-xs text-[#999] line-through">
            &euro;{product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
    </Link>
  );
}
