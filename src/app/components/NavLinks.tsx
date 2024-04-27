'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {

    const pathName = usePathname()

    const links = [{
        name: 'Drivers',
        href: '/',
    }, {
        name: 'Vehicles',
        href: '/vehicles',
    },
    {
        name: 'Trips',
        href: '/trips',
    }]

    return (
        <>
            {
                links.map((link) => {
                    return (
                        <li key={link.href}>
                            <Link href={link.href} className={`${pathName === link.href ? 'bg-blue-600 text-white' : ''} block px-4 py-2 text-white hover:bg-blue-900 hover:text-white`}>
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}

export default NavLinks