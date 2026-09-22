import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About Advertisement Hub
            </span>

            <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Connecting People With Products & Services
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Advertisement Hub is a platform where people and businesses can
              showcase their products, services, jobs, properties, vehicles
              and much more.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Mission
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Making advertising simple and accessible
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our goal is to provide a simple platform where users can
                create advertisements and make their products or services
                visible to people looking for them.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Visitors can browse advertisements across different
                categories and discover products and services available from
                different advertisers.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-600 p-10 text-white shadow-lg">
              <h3 className="text-2xl font-bold">
                One Platform. Many Opportunities.
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                From local services and businesses to products, jobs,
                properties and vehicles, Advertisement Hub brings different
                types of advertisements together in one place.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              How Advertisement Hub Works
            </h2>

            <p className="mt-4 text-slate-600">
              A simple process for advertisers and visitors.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                1
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Create an Account
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Users can register for an account and access the advertising
                features of the platform.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                2
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Post an Advertisement
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Advertisers can provide information about their product or
                service and publish their advertisement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                3
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Reach Visitors
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Visitors can browse advertisements and discover products and
                services that interest them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              What We Focus On
            </h2>

            <p className="mt-4 text-slate-600">
              Advertisement Hub is designed around a few simple principles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Simplicity
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Keeping the advertising process simple and easy to understand.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Accessibility
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Giving users a convenient place to discover and advertise
                products and services.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Community
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Bringing advertisers and visitors together through one
                platform.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}