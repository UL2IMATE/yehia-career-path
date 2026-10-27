import React from "react";
import { applications } from "@/data/applications";
import ApplicationsCard from "@/components/ApplicationsCard";

const page = () => {
  return (
    <main className="p-6 flex flex-col gap-15 justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-900">
          Applications
        </h1>
        <h3 className="text-lg md:text-xl font-bold text-blue-700">
          Track your job search momentum and review your submitted applications
          in one place.
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-start  gap-6 w-full max-w-6xl">
        {applications.map((application) => (
          <ApplicationsCard
            key={application.id}
            id={application.id}
            company={application.company}
            description={application.description}
            location={application.location}
            title={application.title}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
