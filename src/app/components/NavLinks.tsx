'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {

    const pathName = usePathname()

    const links = [{
        name: 'Drivers',
        href: '/dashboard/drivers',
    }, {
        name: 'Vehicles',
        href: '/dashboard/vehicles',
    },
    {
        name: 'Trips',
        href: '/dashboard/trips',
    }]

    return (
        <>
            {
                links.map((link) => {
                    return (
                        <li key={link.href}>
                            <Link href={link.href} className={`${pathName === link.href ? 'bg-blue-900 text-white' : ''} px-4 py-2 text-white hover:bg-blue-900 hover:text-white  w-full justify-between flex pr-8`}>
                                <p>{link.name}</p>
                                <img src={`/icons/${link.name === 'Vehicles' ? 'car' : link.name === 'Drivers' ? 'people' : 'trips'}.svg`}></img>
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default NavLinks