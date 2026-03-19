import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#d4d4d4] h-screen relative overflow-hidden">
      {/* Full-bleed desktop hero image from ring.com */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.ctfassets.net/2xsswpd01u70/2NWGNqdYfFotIijt96Zb9n/cd6be1445272e247f685b2d4eba888d5/H1_Hero_HP_desktop_1366x768_V5.png"
        alt="Ring security cameras and video doorbells on display"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      {/* Text overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-32 sm:pt-36 lg:pt-40">
        <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight mb-5">
          Security never looked<br className="hidden sm:block" /> so sharp.
        </h1>
        <p className="text-[#555] text-base sm:text-lg max-w-lg mx-auto mb-7">
          See every moment in stunning clarity with next-generation 2K and 4K Video Doorbells and Security Cameras.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="inline-block bg-[#1a1a1a] hover:bg-black text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-semibold text-sm px-8 py-3 rounded-full transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
