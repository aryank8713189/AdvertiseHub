import Link from "next/link";
import Container from "../layout/Container";
import AdvertisementCard from "../advertisement/AdvertisementCard";
import { latestAds } from "@/mock-data/latestAds";

const LatestAdvertisements = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Latest Advertisements
            </h2>

            <p className="mt-3 text-slate-600">
              Discover the newest products and services posted on Advertisement Hub.
            </p>
          </div>

          <Link
            href="/advertisements"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Advertisements
          </Link>
        </div>

        {/* Advertisement Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {latestAds.map((advertisement) => (
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

export default LatestAdvertisements;