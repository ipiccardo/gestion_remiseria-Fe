import { vehicleApi } from '@/api'
import EditCar from '@/app/components/forms/edit/EditCar'
import React from 'react'

export async function page({ params }: { params: { slug: string } }) {

    const id = params

    const vehicle = await vehicleApi.fetch(id)

    return (
        <EditCar vehicle={vehicle} />
    )
}

export default page