import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Smart Space | Ring Doorbells & Security Cameras Ireland",
  description:
    "Ireland's trusted Ring installer. Shop Ring doorbells, security cameras, alarm systems and smart home bundles. Professional installation available.",
  keywords:
    "Ring doorbell Ireland, Ring camera Ireland, Ring security, smart home Ireland, Ring installer Dublin",
  openGraph: {
    title: "Smart Space | Ring Doorbells & Security Cameras Ireland",
    description:
      "Shop Ring doorbells, security cameras and alarm systems. Professional installation across Ireland.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
