import Link from "next/link";

export default function WholeHomeSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.ctfassets.net/2xsswpd01u70/6oP3FvB0kESCnQarf0aZne/2a1822b84a39ba1bab9f9f36499bd03e/ring_products_build_your_system_mobile_2x.jpg"
              alt="Build your Ring system"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] mb-4 leading-tight">
              Whole-home security,<br />one step at a time.
            </h2>
            <p className="text-[#666] text-base mb-6 leading-relaxed">
              Start with a doorbell and expand to cameras, alarms, and more. Every Ring device works together through the Ring app.
            </p>
            <Link
              href="/products"
              className="inline-block bg-[#1a1a1a] hover:bg-black text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
