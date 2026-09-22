import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { featuredAds } from "@/mock-data/advertisements";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdvertisementDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const advertisement = featuredAds.find(
    (ad) => String(ad.id) === id
  );

  if (!advertisement) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        {/* Back Button */}
        <Link
          href="/advertisements"
          className="mb-8 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to Advertisements
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Advertisement Image */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={advertisement.image}
              alt={advertisement.title}
              className="h-[400px] w-full object-cover"
            />
          </div>

          {/* Advertisement Information */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
              {advertisement.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-900">
              {advertisement.title}
            </h1>

            <p className="mt-5 text-2xl font-bold text-blue-600">
              {advertisement.price}
            </p>

            <div className="mt-6 space-y-3 text-slate-600">
              <p>
                <strong>Location:</strong> {advertisement.location}
              </p>

              <p>
                <strong>Posted:</strong> {advertisement.posted}
              </p>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-900">
                Description
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This advertisement has been posted on Advertisement Hub.
                Contact the advertiser to learn more about this product or
                service.
              </p>
            </div>

            {/* Contact Button */}
            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Advertiser
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}