import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    children: any,
    secondary?: boolean
}

const Button = ({ children, secondary }: ButtonProps) => {
    return (
        <Link href={`${children.includes('Driver') ?
            'drivers' : children.includes('Vehicle') ?
                'vehicles' :
                'trips'}/${children.includes('Driver') ?
                    'createemployee' : children.includes('Vehicle') ?
                        'createvehicle' :
                        'createtrip'}`} className={`${secondary ? ' flex items-center justify-center w-32 p-2 rounded border-blue-700 border-solid border-2 text-blue-700 bg-white hover:border-blue-900 hover:text-blue-900' : ' flex items-center justify-center bg-blue-800  text-white p-2 rounded hover:bg-blue-900 w-32'}`}>{children}</Link>
    )
}

export default Button