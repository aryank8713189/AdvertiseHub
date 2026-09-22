import Link from "next/link";
import Container from "@/components/layout/Container";

const stats = [
  {
    title: "Total Advertisements",
    value: "2,500+",
    description: "All advertisements",
  },
  {
    title: "Pending Advertisements",
    value: "32",
    description: "Waiting for approval",
  },
  {
    title: "Active Advertisements",
    value: "2,400+",
    description: "Currently published",
  },
  {
    title: "Total Users",
    value: "10,000+",
    description: "Registered users",
  },
];

const recentAdvertisements = [
  {
    id: 1,
    title: "Beautiful 2BHK Apartment",
    user: "Rahul Sharma",
    category: "Real Estate",
    status: "Active",
  },
  {
    id: 2,
    title: "Maruti Suzuki Swift",
    user: "Amit Kumar",
    category: "Vehicles",
    status: "Active",
  },
  {
    id: 3,
    title: "Professional Home Tuition",
    user: "Priya Verma",
    category: "Education",
    status: "Pending",
  },
  {
    id: 4,
    title: "Experienced Web Developer",
    user: "Rohit Singh",
    category: "Services",
    status: "Pending",
  },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Admin Panel
          </span>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Welcome, Admin
          </h1>

          <p className="mt-2 text-slate-600">
            Manage advertisements, users and your Advertisement Hub platform.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-2 text-slate-600">
            Quickly manage your Advertisement Hub platform.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/admin/advertisements"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Manage Advertisements
            </Link>

            <Link
              href="/advertisements"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View Website
            </Link>
          </div>
        </div>

        {/* Recent Advertisements */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Recent Advertisements
              </h2>

              <p className="mt-2 text-slate-600">
                Recently submitted advertisements.
              </p>
            </div>

            <Link
              href="/admin/advertisements"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              View All →
            </Link>
          </div>

          <div className="mt-8 space-y-4">
            {recentAdvertisements.map((advertisement) => (
              <div
                key={advertisement.id}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-bold text-slate-900">
                    {advertisement.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
                    <span>
                      User: {advertisement.user}
                    </span>

                    <span>
                      Category: {advertisement.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      advertisement.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {advertisement.status}
                  </span>

                  <Link
                    href={`/admin/advertisements/${advertisement.id}`}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}