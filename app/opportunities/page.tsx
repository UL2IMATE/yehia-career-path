// app/opportunities/page.tsx
import React from "react";
import JobCard from "@/components/JobCard";
import { opportunities } from "@/data/opportunities";

const OpportunitiesPage = () => {
  return (
    <main className="min-h-screen p-6  flex flex-col gap-12 justify-center">
      <h1 className="text-6xl md:text-8xl font-bold text-blue-900">
        Opportunities
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {opportunities.map((opportunity) => (
          <JobCard
            key={opportunity.id}
            id={opportunity.id}
            company={opportunity.company}
            description={opportunity.description}
            location={opportunity.location}
            title={opportunity.title}
          />
        ))}
      </div>
    </main>
  );
};

export default OpportunitiesPage;
