import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Contact Us
            </span>

            <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Get In Touch With Us
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Have a question, suggestion, or need help? Send us a message
              and we will get back to you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Contact Information
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you have any questions about Advertisement Hub, feel free
                to contact us.
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="mt-2 text-slate-600">
                    support@advertisementhub.com
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="mt-2 text-slate-600">
                    +91 00000 00000
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Working Hours</h3>
                  <p className="mt-2 text-slate-600">
                    Monday - Saturday
                  </p>
                  <p className="text-slate-600">
                    10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h2>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
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

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}