import Link from "next/link";

interface CategoryCardProps {
  category: {
    title: string;
    slug: string;
    ads: string;
    icon: React.ElementType;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = category.icon;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={32} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {category.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {category.ads}
      </p>
    </Link>
  );
};

export default CategoryCard;