import React, { Suspense } from 'react'
import { CarsTable } from '../components/tablas/CarsTable'
import Button from '../components/Button'
import { InputDemo } from '../components/SearchBar'
import { PaginationDemo } from '../components/Pagination'

export default async function page({ searchParams }: {
    searchParams?: {
        searchvehicle?: string,
    }
}) {

    const vehicle = searchParams?.searchvehicle || ''

    return (
        <div className="w-full">
            <div className="w-52 md:w-80 mb-8">
                <Button> + New Vehicle </Button>
            </div>
            <div className="w-52 md:w-80 mb-8">
                <InputDemo />
            </div>
            {/* <div className="max-w-5xl w-full"> */}
            <div>
                <Suspense key={vehicle} fallback={<h1>LOADING....</h1>}>
                    <CarsTable vehicle={vehicle} />
                </Suspense>
                {/* <PaginationDemo /> */}
            </div>
        </div>
    )
}

