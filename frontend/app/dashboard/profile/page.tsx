import Container from "@/components/layout/Container";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Summary */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
              U
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              User Name
            </h2>

            <p className="mt-1 text-slate-500">
              user@example.com
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Account Type
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                Advertiser
              </p>
            </div>
          </div>

          {/* Profile Information */}
          <div className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Personal Information
            </h2>

            <form className="mt-6 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
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
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

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
                    placeholder="Enter your location"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  About You
                </label>

                <textarea
                  id="bio"
                  rows={5}
                  placeholder="Tell us something about yourself..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div className="border-t border-slate-200 pt-6">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Change Password */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Change Password
          </h2>

          <p className="mt-2 text-slate-600">
            Update your password to keep your account secure.
          </p>

          <form className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="currentPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Current Password
              </label>

              <input
                id="currentPassword"
                type="password"
                placeholder="Current password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                New Password
              </label>

              <input
                id="newPassword"
                type="password"
                placeholder="New password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}