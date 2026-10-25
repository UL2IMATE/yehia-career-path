import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="w-full w-300 min-h-screen  p-6 space-y-4 flex justify-center flex-wrap  flex-col">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-900 items-baseline mb-15 md:mb-30">
          Welcome to Yehia’s Career Hub
        </h1>

        <p className="text-gray-700 text-md md:text-xl  leading-relaxed px-10">
          Yehia is a recent Computer Science graduate from the Lebanese
          University, First Branch. Trading post-graduation uncertainty for a
          clear path forward, he has set one primary goal:
          <strong> land a job within the next two months.</strong>
        </p>

        <p className="text-gray-700 text-md md:text-xl   leading-relaxed px-10">
          Instead of drowning in dozens of open tabs and scattered tutorials, he
          built this hub to organize his next steps, track his progress, and
          move forward one day at a time.
        </p>
        <ul className="text-gray-700 text-2xl place-items-center leading-relaxed list-disc  ">
          <li className="text-blue-600 hover:text-blue-800 font-medium transition-all">
            <Link href={"/plan"}>View His Two-Month Plan</Link>
          </li>
          <li className="text-blue-600 hover:text-blue-800 font-medium transition-all">
            <Link href={"/opportunities"}>Explore opportunities</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
