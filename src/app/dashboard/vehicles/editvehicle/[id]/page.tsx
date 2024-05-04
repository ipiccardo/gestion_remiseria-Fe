import { driverApi, vehicleApi } from '@/api'
import EditCar from '@/app/components/forms/edit/EditCar'
import React from 'react'

export default async function page({ params }: { params: { slug: string } }) {

    const id = params

    const [drivers, vehicle] = await Promise.all([
        driverApi.list(),
        vehicleApi.fetch(id)
    ])




    return (
        <EditCar vehicle={vehicle} driversList={drivers} />
    )
}

