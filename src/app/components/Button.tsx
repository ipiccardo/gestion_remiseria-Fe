import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    children: any,
    secondary?: boolean
}

const Button = ({ children }: ButtonProps) => {
    return (
        <Link href={`
        
        ${children.includes('Driver') ?
                'drivers' : children.includes('Vehicle') ?
                    'vehicles' :
                    'trips'}/${children.includes('Driver') ?
                        'createemployee' : children.includes('Vehicle') ?
                            'createvehicle' :
                            'createtrip'}`} className={`${'flex items-center justify-center bg-blue-800  text-white p-2 rounded hover:bg-blue-900 w-32'}`}>{children}</Link>
    )
}

export default Button