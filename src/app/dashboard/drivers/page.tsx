import React from 'react'
import Button from '../../components/Button'
import { InputDemo } from '../../components/SearchBar'
import { DriversTable } from '../../components/tablas/DriversTable'
import { PaginationDemo } from '../../components/Pagination'
import { Suspense } from 'react'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import SkeletonCard from '../../components/loaders/generalLoader'

export default async function Page({ searchParams }: {
    searchParams?: {
        searchdriver?: string,
    }
}) {

    const driver = searchParams?.searchdriver || ''


    return (
        <div className="w-full">
            <div className="w-52 md:w-80 mb-8">
                <Button> + New Driver </Button>
            </div>
            <div className="w-52 md:w-80 mb-8">
                <InputDemo />
            </div>
            <div>
                <Suspense key={driver} fallback={<SkeletonCard />}>
                    <DriversTable driver={driver} />
                </Suspense>
            </div>
        </div>
    )
}

