import Link from 'next/link';
import React from 'react'
import NavLinks from './NavLinks';
import Image from 'next/image';

const SideBar = () => {


    return (
        <div className="text-white w-full h-auto min-h-screen min-w-48 flex flex-col justify-between  bg-gradient-to-b from-blue-800 to-blue-700 ">
            <div className="py-4">
                <Link className="px-4 mb-4 flex justify-center cursor-pointer" href={'/'} >
                    <Image priority width={200} height={200} src={'/images/logo.png'} alt={'logo'} />
                </Link>
                <ul className="space-y-2">
                    <NavLinks />
                </ul>
            </div>
        </div>
    );
}

export default SideBar