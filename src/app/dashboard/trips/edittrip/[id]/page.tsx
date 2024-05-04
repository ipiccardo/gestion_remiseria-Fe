import { driverApi, tripsApi, vehicleApi } from '@/api'
import EditTrip from '@/app/components/forms/edit/EditTrip'
import React from 'react'

export default async function page({ params }: { params: { slug: string } }) {

    const id = params

    const [drivers, vehicles, trip] = await Promise.all([
        driverApi.list(),
        vehicleApi.list(),
        tripsApi.fetch(id)
    ]);


    return (
        <EditTrip trip={trip} driversList={drivers} vehiclesList={vehicles} />
    )
}

