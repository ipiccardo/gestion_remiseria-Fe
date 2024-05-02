import { tripsApi } from '@/api'
import EditTrip from '@/app/components/forms/edit/EditTrip'
import React from 'react'

export async function page({ params }: { params: { slug: string } }) {

    const id = params

    const trip = await tripsApi.fetch(id)

    return (
        <EditTrip trip={trip} />
    )
}

export default page