import { opportunities } from "@/data/opportunities";
import Link from "next/link";
interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return opportunities.map((opp) => ({
    id: opp.id,
  }));
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  const selectedOpportunity = opportunities.find((opp) => {
    return opp.id === id;
  });
  return (
    <>
      {selectedOpportunity ? (
        <main className="min-h-screen p-6  flex flex-col items-center justify-center">
          <div className="space-y-3">
            <p className="text-5xl font-bold text-gray-900">
              {selectedOpportunity.title}
            </p>
            <p className="text-3xl text-gray-700 font-semibold">
              {selectedOpportunity.company}
            </p>
            <p className="text-xl text-gray-600">
              {selectedOpportunity.location}
            </p>
            <p className="text-lg text-slate-700">
              {selectedOpportunity.description}
            </p>
          </div>
          <div className="pt-4 items-baseline">
            <Link
              href={"/opportunities"}
              className="text-blue-600 hover:text-blue-800 font-medium transition-all"
            >
              go back &rarr;
            </Link>
          </div>
        </main>
      ) : (
        <p className="min-h-screen p-6  flex flex-col items-center justify-center">
          Opportunity not found{" "}
          <span className="text-blue-500 text-xl font-bold">
            <Link href={"/opportunities"}>go back</Link>
          </span>
        </p>
      )}
    </>
  );
}
