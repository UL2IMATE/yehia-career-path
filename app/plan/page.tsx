import React from "react";

const page = () => {
  return (
    <main className="w-full w-300 min-h-screen  p-6 space-y-4 flex justify-center  flex-col">
      <h1 className=" text-6xl md:text-8xl  font-bold text-blue-900 items-baseline ">
        Yehia’s Two-Month Plan
      </h1>
      <h2 className="text-xl md:text-3xl font-bold text-blue-950 mb-15 ">
        A step-by-step roadmap to go from recent graduate to hired developer in
        60 days.
      </h2>

      <ul className="list-decimal text-gray-700 text-xl  leading-relaxed p-7">
        <li>
          <span className="text-4xl text-gray-900">Prepare</span>
          <p className="text-3xl text-gray-600">
            Build a strong foundation by defining a clear career direction and
            polishing core application materials before reaching out to
            companies
          </p>
          <ul className="list-disc text-gray-500 mb-10">
            <li>
              Choose a primary target role (e.g., Frontend, Backend, or
              Full-Stack Developer) to keep the job search focused.
            </li>
            <li>
              Rewrite the CV to highlight relevant university coursework,
              technical skills, and measurable project outcomes.
            </li>
            <li>
              Clean up GitHub repositories and deploy 2–3 best projects to a
              live portfolio site with clear README documentation.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-4xl text-gray-900">Practice</span>
          <p className="text-3xl text-gray-600">
            Sharpen technical abilities and build confidence to handle coding
            assessments and technical interviews effectively.
          </p>
          <ul className="list-disc text-gray-500 mb-10">
            <li>
              Build or refine one focused project using the core tech stack
              required by target job listings.
            </li>
            <li>
              Solve 2–3 data structures and algorithms problems daily to prepare
              for technical screening tests.
            </li>
            <li>
              Practice explaining past projects, technical decisions, and common
              behavioral questions out loud.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-4xl text-gray-900">Apply</span>
          <p className="text-3xl text-gray-600">
            Transition into active outreach by targeting suitable openings,
            submitting tailored applications, and managing follow-ups
            systematically.
          </p>
          <ul className="list-disc text-gray-500 mb-10">
            <li>
              Shortlist matching roles on the Opportunities page and submit 3–5
              tailored applications every week.
            </li>
            <li>
              Customize each CV and cover note to match the specific keywords
              and requirements of the company.
            </li>
            <li>
              Log every submitted application and send a polite follow-up
              message 7–10 days after applying.
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default page;
