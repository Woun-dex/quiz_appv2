import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight sm:max-w-md md:max-w-lg mx-auto mb-6 font-bold"> Welcome To The Quiz App </h1>
      <p className="sm:text-md md:text-lg lg:text-xl text-center leading-tight sm:max-w-md md:max-w-lg mx-auto "> The New and Fun Way To Test your Knowledge </p>
      <button className="btn mt-3 m:text-md md:text-lg lg:text-xl font-semibold">
        <Link href='Quiz-start'>
        Start Quiz
        </Link>
      </button>
    </div>
  );
}
