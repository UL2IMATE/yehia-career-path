import React from "react";
import { opportunities } from "@/data/opportunities";

const page = () => {
  return (
    <>
      <main className=' p-6  flex flex-col gap-15 justify-center"'>
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-900">
            Dashboard Overview
          </h1>
          <h3 className=" text-lg md:text-xl  font-bold text-blue-700">
            Track your job search momentum and review your submitted
            applications in one place.
          </h3>
        </div>

        <p className="text-lg text-gray-700 px-5">
          total applications:{" "}
          <span className="font-bold">{opportunities.length} </span>
        </p>
        <div className="text-blue-950 text-3xl max-w-7xl px-5">
          <span className="font-bold "> Keep Going!</span> Every application you
          send brings you one step closer to your two-month goal. Stay
          consistent, keep refining your pitch, and don't forget to follow up on
          your active leads—your next big opportunity is right around the
          corner.
        </div>
      </main>
    </>
  );
};

export default page;
