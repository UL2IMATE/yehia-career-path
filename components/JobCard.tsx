// components/JobCard.tsx
import React from "react";
import Link from "next/link";

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  company: string;
}

const JobCard = ({
  id,
  title,
  location,
  description,
  company,
}: JobCardProps) => {
  const destination = `/opportunities/${id}`;

  return (
    <div className="w-80 min-h-75 border-2 border-black rounded-lg flex flex-col justify-between p-5">
      <div className="space-y-3">
        <p className="text-3xl font-bold text-gray-900">{title}</p>
        <p className="text-xl text-gray-700 font-semibold">{company}</p>
        <p className="text-lg text-gray-600">{location}</p>
        <p className="text-sm text-slate-700">{description}</p>
      </div>

      <div className="pt-4">
        <Link
          href={destination}
          className="text-blue-600 hover:text-blue-800 font-medium transition-all"
        >
          View opportunity &rarr;
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
