import Link from "next/link";
import Container from "@/components/layout/Container";

const stats = [
  {
    title: "Total Advertisements",
    value: "0",
  },
  {
    title: "Active Advertisements",
    value: "0",
  },
  {
    title: "Pending Advertisements",
    value: "0",
  },
  {
    title: "Views",
    value: "0",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome to Your Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your advertisements and account from one place.
          </p>
        </div>

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
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-2 text-slate-600">
            Quickly manage your advertisements.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/dashboard/create"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              + Create Advertisement
            </Link>

            <Link
              href="/dashboard/advertisements"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              My Advertisements
            </Link>

            <Link
              href="/dashboard/profile"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              My Profile
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-blue-600 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-bold">
            Start Advertising Today
          </h2>

          <p className="mt-3 max-w-2xl text-blue-100">
            Create your first advertisement and reach people who are looking
            for your products or services.
          </p>

          <Link
            href="/dashboard/create"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Create Your First Ad
          </Link>
        </div>
      </Container>
    </main>
  );
}