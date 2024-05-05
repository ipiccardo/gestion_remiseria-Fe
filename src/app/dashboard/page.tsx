import React, { Suspense } from 'react'
import { TripsTable } from '../components/tablas/TripsTable'
import { InputDemo } from '../components/SearchBar'
import Button from '../components/Button'
import SkeletonCard from '../components/loaders/generalLoader'

export default async function page({ searchParams }: {
    searchParams?: {
        searchtrip?: string,
    }
}) {

    const trip = searchParams?.searchtrip || ''


    return (
        <div className="w-full">
            <div className="w-52 md:w-80 mb-8">
                <Button> + New Trip </Button>
            </div>
            <div className="w-52 md:w-80 mb-8">
                <InputDemo />
            </div>
            {/* <div className="max-w-5xl w-full"> */}
            <div>
                <Suspense key={trip} fallback={<SkeletonCard />}>
                    <TripsTable trip={trip} />
                </Suspense>
                {/* <PaginationDemo /> */}
            </div>
        </div>
    )
}
