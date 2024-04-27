import React from 'react'
import Button from '../components/Button'
import { InputDemo } from '../components/SearchBar'
import { DriversTable } from '../components/tablas/DriversTable'

const page = () => {
    return (
        <div className="w-full">
            <div className="w-80 mb-8">
                <Button> + Create New Driver </Button>
            </div>
            <div className="w-80 mb-8">
                <InputDemo />
            </div>
            <div className="max-w-5xl">
                <DriversTable />
            </div>
        </div>
    )
}

export default page