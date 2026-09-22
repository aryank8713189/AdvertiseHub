import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
}

const StatsCard = ({
  icon: Icon,
  number,
  title,
}: StatsCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Icon size={32} />
      </div>

      <h3 className="mt-6 text-4xl font-bold text-slate-900">
        {number}
      </h3>

      <p className="mt-2 text-slate-600">
        {title}
      </p>
    </div>
  );
};

export default StatsCard;