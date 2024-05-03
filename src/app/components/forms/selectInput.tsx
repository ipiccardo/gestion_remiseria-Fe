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
import { driver, Vehiculo } from "../../../../types"

export function SelectInput({ name, data, onChange }: any) {

    const handleSelect = (e: any) => {
        if (onChange) {
            const newValue = e;
            onChange(newValue);
        }
    }

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
            <Select onValueChange={(e) => handleSelect(e)}>
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
                        ) : name === 'Driver' || name === 'Empleado' ?
                            (
                                <SelectGroup defaultValue={data ? data : ''}>
                                    <SelectLabel>Empleado</SelectLabel>
                                    {
                                        data?.map((empleado: driver) => {
                                            return (
                                                <SelectItem key={empleado.id} value={empleado.id.toString()}>{`${empleado.apellido} ${empleado.nombre}`}</SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            ) : name === 'Vehicle' ?
                                <SelectGroup defaultValue={data ? data : ''}>
                                    <SelectLabel>Vehicle</SelectLabel>
                                    {
                                        data?.map((vehiculo: Vehiculo) => {
                                            return (
                                                <SelectItem key={vehiculo.id} value={`${vehiculo.id}`}>{`${vehiculo.marca} ${vehiculo.modelo}`}</SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                                :

                                (
                                    <SelectGroup defaultValue={data ? data : ''} onSelect={(e) => handleSelect(e.target.addEventListener.name)}>
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
