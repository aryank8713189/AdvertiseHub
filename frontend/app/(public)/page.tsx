import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedAdvertisements from "@/components/home/FeaturedAdvertisements";
import LatestAdvertisements from "@/components/home/LatestAdvertisements";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedAdvertisements />
      <LatestAdvertisements />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <CallToAction />
    </>
  );
}