import Container from "../layout/Container";
import CategoryCard from "./CategoryCard";
import { categories } from "@/constants/categories";

const CategorySection = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Browse by Categories
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Find the best advertisements across different categories.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;