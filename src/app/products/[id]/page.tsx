import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ShoppingCart, Phone, Check, Truck, Shield, Wrench } from "lucide-react";
import { products, getProductById, getRelatedProducts, categoryInfo } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Smart Space`,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="pt-32 lg:pt-36 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-brand-500 transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            All Products
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-brand-500 transition-colors"
          >
            {categoryInfo[product.category].label}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Image */}
          <div className="relative bg-[#f5f5f5] rounded-2xl p-8 lg:p-12 flex items-center justify-center aspect-square lg:aspect-auto lg:min-h-[500px]">
            {product.badge && (
              <span className="absolute top-6 right-6 bg-brand-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                {product.badge}
              </span>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold text-brand-500 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-md mb-3">
                {categoryInfo[product.category].label}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-gray-900">
                &euro;{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    &euro;{product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
                    Save &euro;{(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/25 text-base">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold py-4 rounded-xl hover:border-brand-500 hover:text-brand-500 transition-all text-base"
              >
                <Phone className="h-5 w-5" />
                Book Installation
              </Link>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Truck className="h-4 w-4 text-brand-500" />
                Free Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Wrench className="h-4 w-4 text-brand-500" />
                Pro Install
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4 text-brand-500" />
                Warranty
              </div>
            </div>

            {/* Features */}
            <div className="pt-4">
              <h3 className="font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="pt-4">
              <h3 className="font-bold text-gray-900 mb-4">Specifications</h3>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex justify-between py-3 px-4 text-sm ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-500">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
