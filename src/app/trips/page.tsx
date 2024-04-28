import React from 'react'
import { TripsTable } from '../components/tablas/TripsTable'
import { InputDemo } from '../components/SearchBar'
import Button from '../components/Button'

const page = () => {
    return (
        <div className="w-full">
            <div className="w-80 mb-8">
                <Button> + New Trip </Button>
            </div>
            <div className="w-80 mb-8">
                <InputDemo />
            </div>
            <div className="max-w-5xl w-full">
                <TripsTable />
            </div>
        </div>
    )
}

export default page