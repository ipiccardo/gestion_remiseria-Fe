'use client'
import * as React from "react"
import { useState, useEffect } from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectInput({ name, data }: any) {

    const [placeholder, setPlaceHolder] = useState('')

    useEffect(() => {

        if (name === 'Estado') {
            setPlaceHolder(data ? 'Disponible' : 'Taller')
        } else if (name === 'Empleado') {
            setPlaceHolder(data ? data : '')
        } else {
            setPlaceHolder(data ? data : `Select ${name}`)
        }

    }, [name])


    return (
        <div className="w-full">
            <label className='text-gray-800'>{name}</label>
            <Select>
                <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {
                        name === 'Estado' ? (
                            <SelectGroup defaultValue={data !== undefined ? data ? 'Disponible' : 'Taller' : ''}>
                                <SelectLabel>Estado</SelectLabel>
                                <SelectItem value="disponible">Disponible</SelectItem>
                                <SelectItem value="taller">Taller</SelectItem>
                            </SelectGroup>
                        ) : name === 'Empleado' ?
                            (
                                <SelectGroup defaultValue={data ? data : ''}>
                                    <SelectLabel>Empleado</SelectLabel>
                                    {/* ACA VA EL ARRAY DE EMPLEADOS DISPONIBLES--------------------------------- */}
                                    {/* <SelectItem value="estandar">Estandar</SelectItem>
                                    <SelectItem value="profesional">Profesional</SelectItem> */}
                                </SelectGroup>
                            ) :

                            (
                                <SelectGroup defaultValue={data ? data : ''}>
                                    <SelectLabel>Licencia</SelectLabel>
                                    <SelectItem value="estandar">Estandar</SelectItem>
                                    <SelectItem value="profesional">Profesional</SelectItem>
                                </SelectGroup>
                            )

                    }
                </SelectContent>
            </Select>
        </div>
    )
}
