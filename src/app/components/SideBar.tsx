import Link from 'next/link';
import React from 'react'
import NavLinks from './NavLinks';

const SideBar = () => {
    return (
        <div className="text-white w-48 h-auto min-h-screen min-w-48 flex flex-col justify-between border-2 bg-gradient-to-b from-blue-800 to-blue-700 ">
            <div className="py-4">
                <div className="px-4 mb-4">
                    <h2 className="text-lg font-semibold">Menu</h2>
                </div>
                <ul className="space-y-2">
                    <NavLinks />
                </ul>
            </div>
        </div>
    );
}

export default SideBar