import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import WholeHomeSection from "@/components/WholeHomeSection";
import MailingList from "@/components/MailingList";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <FeaturedProducts />
      <PromoBanner />
      <WholeHomeSection />
      <MailingList />
    </>
  );
}
