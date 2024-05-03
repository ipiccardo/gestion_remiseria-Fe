
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver, Trips, Vehiculo } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';
import { editTripAction } from '@/app/actions/actions';

const EditTripForm = ({ trip, driversList, vehiclesList }: any) => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1]
    const formatDate = trip.fecha.split('T')
    const correctDate = formatDate[0]
    const [formData, setFormData] = useState<Trips>({ ...trip, fecha: correctDate });
    const [validFields, setValidFields] = useState<Record<keyof any, boolean>>({
        id: true,
        nombre: true,
        apellido: true,
        dni: true,
        fecha: true,
        patente: true,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [allData, setAllData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)

    const [availableDrivers, setAvailaBleDrivers] = useState<driver>()
    const [availableCars, setAvailableCars] = useState<Vehiculo>()

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
        setAvailaBleDrivers(() => driversList.filter((empleado: driver) => {
            return empleado.licencia_vigente
        }))

    }, [driversList])


    useEffect(() => {
        setAvailableCars(() => vehiclesList.filter((vehiculo: Vehiculo) => {
            return vehiculo.id_empleado === parseInt(formData.apellido)
        }))
    }, [formData.apellido])


    console.log(formData, 'formulario')



    return (
        <>
            <form action={(formData) => editTripAction(formData, trip.id)} className='flex flex-col items-center gap-4 max-w-80  mx-auto w-full ml-0 lg:max-w-3xl border-2 p-8  border-solid shadow-lg shadow-blue-900/50 rounded'>
                <EmployeeInput type='date' name='Date' value={formData.fecha} onChange={(value: string) => handleInputChange('fecha', value)} />
                <EmployeeInput type='number' name='Price (x Kilometres)' value={formData.precio_kilometro} onChange={(value: string) => handleInputChange('precio_kilometro', value)} />
                <EmployeeInput type='number' name='Kilometres' value={formData.kilometros_recorridos} onChange={(value: string) => handleInputChange('kilometros', value)} />
                <EmployeeInput type='select' name='Driver' value={formData.apellido} onChange={(value: string) => handleInputChange('apellido', value)} />
                <EmployeeInput type='select' name='Vehicle' value={formData.modelo} onChange={(value: string) => handleInputChange('modelo', value)} />
                <SelectInput name='Driver' data={availableDrivers} value={formData} onChange={(value: string) => handleInputChange('apellido', value)} />
                <SelectInput name='Vehicle' data={availableCars} value={formData} onChange={(value: string) => handleInputChange('modelo', value)} />
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='flex justify-center items-center text-blue-700 w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-900' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default EditTripForm;