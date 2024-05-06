import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">

      <div className="bg-[url('/images/portada.jpg')] h-screen w-screen absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover">
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8 z-40 top-0 left-0 right-0 bottom-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Welcome to our car service</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">Journey with confidence, ride with ease</h2>
        <Link href="/dashboard/drivers"
          className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300">Enter
        </Link>
      </div>
    </div>
  );
}