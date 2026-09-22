import Container from "../layout/Container";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    message:
      "Advertisement Hub makes it very easy to promote my services and reach new customers.",
  },
  {
    name: "Priya Verma",
    role: "Seller",
    message:
      "I was able to publish my advertisement quickly. The platform is simple and easy to use.",
  },
  {
    name: "Amit Kumar",
    role: "Service Provider",
    message:
      "A great platform for discovering and promoting products and services.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            What Our Users Say
          </h2>

          <p className="mt-4 text-slate-600">
            Hear from people using Advertisement Hub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-3xl text-yellow-500">
                ★★★★★
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                "{testimonial.message}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;