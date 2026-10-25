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

const ApplicationsCard = ({
  id,
  title,
  location,
  description,
  company,
}: JobCardProps) => {
  return (
    <div className="w-80 min-h-70 border-2 border-black rounded-lg flex flex-col justify-between p-5">
      <div className="space-y-3">
        <p className="text-3xl font-bold text-gray-900">{title}</p>
        <p className="text-xl text-gray-700 font-semibold">{company}</p>
        <p className="text-lg text-gray-600">{location}</p>
        <p className="text-sm text-slate-700">{description}asdfasdf</p>
      </div>
    </div>
  );
};

export default ApplicationsCard;
