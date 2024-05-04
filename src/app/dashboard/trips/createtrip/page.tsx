import CreateTrip from '@/app/components/forms/create/CreateTrip'
import React from 'react'
import { driverApi, vehicleApi } from '@/api'

export default async function page() {

    const [drivers, vehicles] = await Promise.all([
        driverApi.list(),
        vehicleApi.list()
    ]);

    return (
        <CreateTrip driverList={drivers} vehiclesList={vehicles} />
    )
}

