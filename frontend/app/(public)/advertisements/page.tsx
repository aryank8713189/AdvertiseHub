import Container from "@/components/layout/Container";
import AdvertisementCard from "@/components/advertisement/AdvertisementCard";
import { featuredAds } from "@/mock-data/advertisements";

export default function AdvertisementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Browse Advertisements
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover products, services, jobs, properties, vehicles and more
            from people and businesses.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Search advertisements..."
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            />

            <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
              <option value="">All Categories</option>
              <option value="real-estate">Real Estate</option>
              <option value="vehicles">Vehicles</option>
              <option value="jobs">Jobs</option>
              <option value="electronics">Electronics</option>
              <option value="education">Education</option>
              <option value="restaurants">Restaurants</option>
              <option value="health">Health</option>
              <option value="services">Services</option>
            </select>

            <input
              type="text"
              placeholder="Enter location..."
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              All Advertisements
            </h2>

            <span className="text-sm text-slate-500">
              {featuredAds.length} advertisements
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {featuredAds.map((advertisement) => (
              <AdvertisementCard
                key={advertisement.id}
                advertisement={advertisement}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}