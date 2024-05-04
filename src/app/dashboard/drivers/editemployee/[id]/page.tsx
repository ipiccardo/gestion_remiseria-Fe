import React from 'react'
import EditEmployee from '../../../../components/forms/edit/EditEmployee'
import { driverApi } from '@/api'


export default async function page({ params }: { params: { id: string } }) {

    const id = params.id

    const driver = await driverApi.fetch(id)

    return (
        <EditEmployee driver={driver} />
    )
}

