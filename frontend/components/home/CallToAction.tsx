import Link from "next/link";
import Container from "../layout/Container";

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20">
      <Container>
        <div className="rounded-3xl bg-blue-700 px-6 py-16 text-center text-white shadow-xl md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Advertise Your Product or Service?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Create your free account and publish your advertisement on
            Advertisement Hub today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Create Free Account
            </Link>

            <Link
              href="/advertisements"
              className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600"
            >
              Browse Advertisements
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;