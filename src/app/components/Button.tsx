import React from 'react'
import Link from 'next/link'

const Button = ({ children }: any) => {
    return (
        <Link href={`${children.includes('Driver') ?
            'drivers' : children.includes('Vehicle') ?
                'vehicles' :
                'trips'}/${children.includes('Driver') ?
                    'createemployee' : children.includes('Vehicle') ?
                        'createvehicle' :
                        'createtrip'}`} className='bg-blue-800  text-white p-2 rounded hover:bg-blue-900 '>{children}</Link>
    )
}

export default Button