import React from 'react'
import { CarsTable } from '../components/tablas/CarsTable'
import Button from '../components/Button'
import { InputDemo } from '../components/SearchBar'
import { PaginationDemo } from '../components/Pagination'

const page = () => {

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
                <CarsTable />
                <PaginationDemo />
            </div>
        </div>
    )
}

export default page