import Link from "next/link";
import Container from "@/components/layout/Container";

const advertisements = [
  {
    id: 1,
    title: "Beautiful 2BHK Apartment",
    category: "Real Estate",
    price: "₹22,000 / Month",
    location: "Noida",
    status: "Active",
  },
  {
    id: 2,
    title: "Maruti Suzuki Swift",
    category: "Vehicles",
    price: "₹5,50,000",
    location: "Delhi",
    status: "Active",
  },
  {
    id: 3,
    title: "Professional Home Tuition",
    category: "Education",
    price: "₹2,000 / Month",
    location: "Lucknow",
    status: "Pending",
  },
];

export default function MyAdvertisementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My Advertisements
            </h1>

            <p className="mt-2 text-slate-600">
              Manage all your advertisements from here.
            </p>
          </div>

          <Link
            href="/dashboard/create"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            + Create Advertisement
          </Link>
        </div>

        {/* Advertisements */}
        <div className="mt-10 space-y-6">
          {advertisements.map((advertisement) => (
            <div
              key={advertisement.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Advertisement Information */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-900">
                      {advertisement.title}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        advertisement.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {advertisement.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-800">
                        Category:
                      </span>{" "}
                      {advertisement.category}
                    </p>

                    <p>
                      <span className="font-semibold text-slate-800">
                        Price:
                      </span>{" "}
                      {advertisement.price}
                    </p>

                    <p>
                      <span className="font-semibold text-slate-800">
                        Location:
                      </span>{" "}
                      {advertisement.location}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/advertisements/${advertisement.id}`}
                    className="rounded-lg border border-slate-300 px-5 py-2.5 text-center font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    View
                  </Link>

                  <Link
                    href={`/dashboard/advertisements/${advertisement.id}/edit`}
                    className="rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white transition hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    className="rounded-lg bg-red-50 px-5 py-2.5 font-medium text-red-600 transition hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}