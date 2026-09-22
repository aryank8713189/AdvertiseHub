import Container from "../layout/Container";
import FeatureCard from "./FeatureCard";
import {
  BadgeCheck,
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  Megaphone,
} from "lucide-react";

const features = [
  {
    title: "Free Advertising",
    description: "Post your advertisements without paying any charges.",
    icon: Megaphone,
  },
  {
    title: "Verified Listings",
    description: "Advertisements are reviewed by our admin for better quality.",
    icon: BadgeCheck,
  },
  {
    title: "Fast & Easy",
    description: "Create and publish advertisements in just a few minutes.",
    icon: Zap,
  },
  {
    title: "Wide Reach",
    description: "Reach thousands of visitors searching for services and products.",
    icon: Globe,
  },
  {
    title: "Mobile Friendly",
    description: "Fully responsive design that works on every device.",
    icon: Smartphone,
  },
  {
    title: "Secure Platform",
    description: "Safe authentication and protected user accounts.",
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Advertisement Hub?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to advertise and discover products and services in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;