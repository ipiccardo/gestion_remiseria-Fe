import React from 'react'
import Button from '../components/Button'
import { InputDemo } from '../components/SearchBar'
import { DriversTable } from '../components/tablas/DriversTable'
import { PaginationDemo } from '../components/Pagination'
import { Suspense } from 'react'
import { driverApi } from '@/api'
import { revalidatePath } from 'next/cache'



export default async function Page({ searchParams }: {
    searchParams?: {
        searchdriver?: string,
    }
}) {

    const driver = searchParams?.searchdriver || ''

    revalidatePath('drivers')

    return (
        <div className="w-full">
            <div className="w-52 md:w-80 mb-8">
                <Button> + New Driver </Button>
            </div>
            <div className="w-52 md:w-80 mb-8">
                <InputDemo />
            </div>
            <div>
                {/* <Suspense key={driver} fallback={<SkeletonCard />}> */}
                <Suspense key={driver} fallback={<h1>LOADING....</h1>}>
                    <DriversTable driver={driver} />
                </Suspense>
                <PaginationDemo />
            </div>
        </div>
    )
}

