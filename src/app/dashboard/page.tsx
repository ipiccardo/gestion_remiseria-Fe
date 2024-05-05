import Link from "next/link";
import Image from 'next/image'

export default async function Home() {
    return (
        <div className="font-sans">

            <div className="bg-[url('/images/portada.jpg')] h-screen w-screen absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover">
            </div>
        </div>
    );
}