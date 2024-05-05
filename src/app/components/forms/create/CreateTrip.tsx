
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver, Trips, Vehiculo } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';
import { createTripAction } from '@/app/actions/actions';

const NewTripForm = ({ driverList, vehiclesList }: any) => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1] + '/' + pathName.split('/')[2]
    const [formData, setFormData] = useState<Trips>({
        id: 0,
        fecha: '',
        kilometros: 0,
        precio_kilometro: 0,
        id_vehiculo: 0,
        marca: '',
        modelo: '',
        patente: '',
        nombre: '',
        apellido: '',
        id_empleado: 0
    });
    const [validFields, setValidFields] = useState<Record<keyof any, boolean>>({
        fecha: false,
        kilometros: false,
        precio_kilometro: false,
    });
    const [showAlert, setShowAlert] = useState(false);

    const [availableDrivers, setAvailaBleDrivers] = useState<driver>()
    const [availableCars, setAvailableCars] = useState<Vehiculo | any>()

    const handleInputChange = (fieldName: keyof Trips, value: string) => {

        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
        validateField(fieldName, value);
    };

    const validateField = (fieldName: keyof Trips, value: string) => {
        const isValid = value.trim() !== '';
        setValidFields(prevFields => ({
            ...prevFields,
            [fieldName]: isValid,
        }));
    };

    const allFieldsValid = Object.values(validFields).every(field => field);


    useEffect(() => {
        setAvailaBleDrivers(() => driverList.filter((empleado: driver) => {
            return empleado.licencia_vigente
        }))

    }, [driverList])


    useEffect(() => {
        setAvailableCars(() => vehiclesList.filter((vehiculo: Vehiculo) => {
            return vehiculo.estado && vehiculo.id_empleado === parseInt(formData.apellido)
        }))
    }, [formData.apellido])


    return (
        <>
            <form action={createTripAction} className='flex flex-col items-center gap-4 max-w-80  mx-auto w-full ml-0 lg:max-w-3xl border-2 p-8  border-solid shadow-lg shadow-blue-900/50 rounded'>
                <EmployeeInput type='date' name='Date' value={formData.fecha} onChange={(value: string) => handleInputChange('fecha', value)} />
                <EmployeeInput type='number' name='Price (x Kilometres)' value={formData.precio_kilometro} onChange={(value: string) => handleInputChange('precio_kilometro', value)} />
                <EmployeeInput type='number' name='Kilometres' value={formData.kilometros} onChange={(value: string) => handleInputChange('kilometros', value)} />
                <EmployeeInput type='select' name='Driver' value={formData.apellido} onChange={(value: string) => handleInputChange('apellido', value)} />
                <EmployeeInput type='select' name='Vehicle' value={formData.modelo !== '' ? formData.modelo : availableCars?.length && availableCars[0].id} onChange={(value: string) => handleInputChange('modelo', value)} />
                <SelectInput name='Driver' data={availableDrivers} onChange={(value: string) => handleInputChange('apellido', value)} />
                <SelectInput name='Vehicle' data={availableCars} onChange={(value: string) => handleInputChange('modelo', value)} />
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='flex justify-center items-center text-blue-700 w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-900' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default NewTripForm;