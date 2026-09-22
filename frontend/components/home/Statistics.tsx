import Container from "../layout/Container";
import StatsCard from "./StatsCard";
import { statistics } from "@/mock-data/statistics";

const Statistics = () => {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Trusted by Thousands
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Advertisement Hub is growing every day.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <StatsCard
              key={item.title}
              icon={item.icon}
              number={item.number}
              title={item.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;