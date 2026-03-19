import Link from "next/link";

const productLinks = [
  { href: "/products?category=doorbell", label: "Video Doorbells" },
  { href: "/products?category=camera", label: "Security Cameras" },
  { href: "/products?category=alarm", label: "Alarm Systems" },
  { href: "/products?category=bundle", label: "Bundles & Packs" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/installation", label: "Installation" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-extrabold text-white mb-4 block">
              Smart<span className="text-brand-500">Space</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Ireland&apos;s trusted Ring installer. Professional installation across Ireland.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Get in Touch</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:info@smart-space.ie" className="hover:text-white transition-colors">
                  info@smart-space.ie
                </a>
              </li>
              <li>
                <a href="tel:+353000000000" className="hover:text-white transition-colors">
                  +353 1 000 0000
                </a>
              </li>
              <li>Dublin, Ireland</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} Smart Space. All rights reserved.</p>
          <p>Authorised Ring Installer</p>
        </div>
      </div>
    </footer>
  );
}
