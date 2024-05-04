import Link from "next/link";
import Image from 'next/image'

export default async function Home() {
  return (
    <div className="">

      <Image
        src="/images/portada.jpg"
        alt="portada"
        fill
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8 z-40">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Welcome to our car service</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">Journey with confidence, ride with ease</h2>
        <Link href="/dashboard/drivers"
          className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300">Ingresar
        </Link>
      </div>
    </div>
  );
}