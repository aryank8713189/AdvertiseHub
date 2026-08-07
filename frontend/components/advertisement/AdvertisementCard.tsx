import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

interface Advertisement {
  id: number;
  title: string;
  price: string;
  location: string;
  category: string;
  image: string;
  posted: string;
  featured: boolean;
}

interface AdvertisementCardProps {
  advertisement: Advertisement;
}

const AdvertisementCard = ({
  advertisement,
}: AdvertisementCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56 w-full">
        <Image
          src={advertisement.image}
          alt={advertisement.title}
          fill
          className="object-cover"
        />

        {advertisement.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
          {advertisement.category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {advertisement.title}
        </h3>

        <p className="mt-2 text-2xl font-bold text-blue-600">
          {advertisement.price}
        </p>

        <div className="mt-4 flex items-center gap-2 text-gray-500">
          <MapPin size={18} />
          {advertisement.location}
        </div>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <Clock size={18} />
          {advertisement.posted}
        </div>

        <Link
          href={`/advertisements/${advertisement.id}`}
          className="mt-6 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AdvertisementCard;