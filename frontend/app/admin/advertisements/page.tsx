import Link from "next/link";
import Container from "@/components/layout/Container";

const advertisements = [
  {
    id: 1,
    title: "Beautiful 2BHK Apartment",
    user: "Rahul Sharma",
    category: "Real Estate",
    price: "₹22,000 / Month",
    location: "Noida",
    status: "Active",
  },
  {
    id: 2,
    title: "Maruti Suzuki Swift",
    user: "Amit Kumar",
    category: "Vehicles",
    price: "₹5,50,000",
    location: "Delhi",
    status: "Active",
  },
  {
    id: 3,
    title: "Professional Home Tuition",
    user: "Priya Verma",
    category: "Education",
    price: "₹2,000 / Month",
    location: "Lucknow",
    status: "Pending",
  },
  {
    id: 4,
    title: "Experienced Web Developer",
    user: "Rohit Singh",
    category: "Services",
    price: "Starting ₹999",
    location: "Bangalore",
    status: "Pending",
  },
];

export default function AdminAdvertisementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <Link
              href="/admin"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              ← Back to Admin Dashboard
            </Link>

            <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Manage Advertisements
            </h1>

            <p className="mt-2 text-slate-600">
              View and manage all advertisements submitted by users.
            </p>
          </div>

          <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
            <p className="text-sm text-slate-500">Total Advertisements</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {advertisements.length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Search & Filter
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Search advertisements..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            <select
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="">All Categories</option>
              <option value="real-estate">Real Estate</option>
              <option value="vehicles">Vehicles</option>
              <option value="education">Education</option>
              <option value="services">Services</option>
            </select>

            <select
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Advertisement List */}
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              All Advertisements
            </h2>

            <span className="text-sm text-slate-500">
              {advertisements.length} results
            </span>
          </div>

          <div className="space-y-5">
            {advertisements.map((advertisement) => (
              <div
                key={advertisement.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Advertisement Information */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {advertisement.title}
                      </h3>

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

                    <div className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                      <p>
                        <span className="font-semibold text-slate-800">
                          User:
                        </span>{" "}
                        {advertisement.user}
                      </p>

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
                      href={`/admin/advertisements/${advertisement.id}`}
                      className="rounded-lg border border-slate-300 px-5 py-2.5 text-center font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      View
                    </Link>

                    <Link
                      href={`/admin/advertisements/${advertisement.id}/edit`}
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
        </div>
      </Container>
    </main>
  );
}