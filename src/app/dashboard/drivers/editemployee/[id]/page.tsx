import React from 'react'
import EditEmployee from '../../../../components/forms/edit/EditEmployee'
import { driverApi } from '@/api'
import { revalidatePath } from 'next/cache'


export async function page({ params }: { params: { slug: string } }) {

    const id = params

    const driver = await driverApi.fetch(id)

    return (
        <EditEmployee driver={driver} />
    )
}

export default page