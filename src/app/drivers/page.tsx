import React from 'react'
import Button from '../components/Button'
import { InputDemo } from '../components/SearchBar'
import { DriversTable } from '../components/tablas/DriversTable'
import { PaginationDemo } from '../components/Pagination'

const page = () => {
    return (
        <div className="w-full">
            <div className="w-52 md:w-80 mb-8">
                <Button> + New Driver </Button>
            </div>
            <div className="w-52 md:w-80 mb-8">
                <InputDemo />
            </div>
            {/* <div className="max-w-5xl"> */}
            <div>
                <DriversTable />
                <PaginationDemo />
            </div>
        </div>
    )
}

export default page