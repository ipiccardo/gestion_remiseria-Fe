import React from 'react'
import Link from 'next/link'

const Button = ({ children }: any) => {


    const handleClick = () => {

    }

    return (
        <Link href={'drivers/createemployee'} className='bg-blue-800 text-white p-2 rounded hover:bg-blue-400'>{children}</Link>
    )
}

export default Button