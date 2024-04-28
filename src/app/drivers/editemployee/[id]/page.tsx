import React from 'react'
import EditEmployee from '../../../components/forms/edit/EditEmployee'

export async function page({ params }: { params: { slug: string } }) {

    const id = params



    return (
        <EditEmployee id={id} />
    )
}

export default page