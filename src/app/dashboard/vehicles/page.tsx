import React, { Suspense } from 'react'
import { CarsTable } from '../../components/tablas/CarsTable'
import Button from '../../components/Button'
import { InputDemo } from '../../components/SearchBar'
import { PaginationDemo } from '../../components/Pagination'
import SkeletonCard from '../../components/loaders/generalLoader'

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
                <Suspense key={vehicle} fallback={<SkeletonCard />}>
                    <CarsTable vehicle={vehicle} />
                </Suspense>
                {/* <PaginationDemo /> */}
            </div>
        </div>
    )
}

