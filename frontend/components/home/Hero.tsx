import Link from "next/link";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 India's Free Advertisement Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
            Advertise Your Products & Services
            <span className="block text-blue-600">
              Completely Free
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Discover local businesses, services, jobs, properties, vehicles,
            and much more. Post your own advertisement in minutes and reach
            thousands of visitors.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/advertisements"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Advertisements
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold transition hover:bg-slate-100"
            >
              Post Advertisement
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;