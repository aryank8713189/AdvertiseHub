import Link from "next/link";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ id: string }>;
};

const advertisement = {
  title: "Beautiful 2BHK Apartment",
  user: "Rahul Sharma",
  email: "rahul@example.com",
  phone: "+91 98765 43210",
  category: "Real Estate",
  price: "₹22,000 / Month",
  location: "Noida",
  status: "Active",
  posted: "Today",
  description:
    "Beautiful 2BHK apartment available for rent in a peaceful residential area. The apartment has spacious rooms, good ventilation and nearby facilities.",
  image: "/images/ads/house.jpg",
};

export default async function AdminAdvertisementDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/advertisements"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Advertisements
          </Link>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Advertisement Details
              </h1>

              <p className="mt-2 text-slate-600">
                Review advertisement information and manage this listing.
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {advertisement.status}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Advertisement ID: {id}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Advertisement */}
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="overflow-hidden rounded-xl bg-slate-100">
              <img
                src={advertisement.image}
                alt={advertisement.title}
                className="h-[350px] w-full object-cover"
              />
            </div>

            <div className="mt-6">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                {advertisement.category}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                {advertisement.title}
              </h2>

              <p className="mt-4 text-2xl font-bold text-blue-600">
                {advertisement.price}
              </p>
            </div>

            {/* Details */}
            <div className="mt-8 grid gap-5 border-t border-slate-200 pt-8 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {advertisement.location}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Posted</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {advertisement.posted}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {advertisement.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="mt-1 font-semibold text-green-600">
                  {advertisement.status}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-slate-900">
                Description
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {advertisement.description}
              </p>
            </div>
          </div>

          {/* User & Actions */}
          <div className="space-y-8">
            {/* Advertiser Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Advertiser Information
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Name</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {advertisement.user}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 break-all font-semibold text-slate-900">
                    {advertisement.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {advertisement.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Actions */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Admin Actions
              </h2>

              <div className="mt-6 space-y-3">
                <Link
                  href={`/admin/advertisements/${id}/edit`}
                  className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Edit Advertisement
                </Link>

                <button
                  type="button"
                  className="w-full rounded-lg bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                >
                  Delete Advertisement
                </button>

                <Link
                  href="/admin/advertisements"
                  className="block w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back to All Advertisements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}