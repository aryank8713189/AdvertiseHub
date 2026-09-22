import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CreateAdvertisementPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/advertisements"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to My Advertisements
          </Link>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Create Advertisement
          </h1>

          <p className="mt-2 text-slate-600">
            Add your product or service to Advertisement Hub.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <form className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Advertisement Title
              </label>

              <input
                id="title"
                type="text"
                placeholder="Enter advertisement title"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Category + Price */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Category
                </label>

                <select
                  id="category"
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="real-estate">Real Estate</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="jobs">Jobs</option>
                  <option value="electronics">Electronics</option>
                  <option value="education">Education</option>
                  <option value="restaurants">Restaurants</option>
                  <option value="health">Health</option>
                  <option value="services">Services</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Price
                </label>

                <input
                  id="price"
                  type="text"
                  placeholder="Enter price"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Location
              </label>

              <input
                id="location"
                type="text"
                placeholder="Enter city or location"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Description
              </label>

              <textarea
                id="description"
                rows={7}
                placeholder="Describe your product or service..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Advertisement Image
              </label>

              <input
                id="image"
                type="file"
                accept="image/*"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-600"
              />

              <p className="mt-2 text-sm text-slate-500">
                Upload a clear image of your product or service.
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-bold text-slate-900">
                Contact Information
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Provide contact details so interested people can reach you.
              </p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/dashboard/advertisements"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Publish Advertisement
              </button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}