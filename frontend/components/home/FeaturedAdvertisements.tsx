import Container from "../layout/Container";
import AdvertisementCard from "../advertisement/AdvertisementCard";
import { featuredAds } from "@/constants/featuredAds";

const FeaturedAdvertisements = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Featured Advertisements
          </h2>

          <p className="mt-4 text-gray-600">
            Explore some of the most popular advertisements on our platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredAds.map((advertisement) => (
            <AdvertisementCard
              key={advertisement.id}
              advertisement={advertisement}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedAdvertisements;