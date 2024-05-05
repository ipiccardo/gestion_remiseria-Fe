
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';
import { DialogDemo } from '../../Dialog';
import { createEmployeeAction } from '../../../actions/actions';


const NewEmployeeForm = () => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1] + '/' + pathName.split('/')[2]
    const [formData, setFormData] = useState<driver>({
        id: 0,
        nombre: '',
        apellido: '',
        dni: 0,
        tipo: '',
        fecha_emision: '2024-01-10',
    });
    const [validFields, setValidFields] = useState<Record<keyof any, boolean>>({
        nombre: false,
        apellido: false,
        dni: false,
        tipo: false,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false)


    const handleInputChange = (fieldName: keyof driver, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
        validateField(fieldName, value);
    };

    const validateField = (fieldName: keyof driver, value: string) => {
        const isValid = value.trim() !== '';
        setValidFields(prevFields => ({
            ...prevFields,
            [fieldName]: isValid,
        }));
    };


    const allFieldsValid = Object.values(validFields).every(field => field);


    return (
        <>
            <form action={createEmployeeAction} className='flex flex-col items-center gap-4 max-w-80  mx-auto w-full ml-0 lg:max-w-3xl border-2 p-8  border-solid shadow-lg shadow-blue-900/50 rounded'>
                <EmployeeInput type='text' name='Nombre' value={formData.nombre} onChange={(value: string) => handleInputChange('nombre', value)} />
                <EmployeeInput type='text' name='Apellido' value={formData.apellido} onChange={(value: string) => handleInputChange('apellido', value)} />
                <EmployeeInput type='number' name='DNI' value={formData.dni} onChange={(value: string) => handleInputChange('dni', value)} />
                <SelectInput type='select' name='tipo' value={formData.tipo} onChange={(value: string) => handleInputChange('tipo', value)} />
                <div className='hidden'>
                    <EmployeeInput type='select' name='tipo' value={formData.tipo} onChange={(value: string) => handleInputChange('tipo', value)} />
                </div>
                <EmployeeInput type='date' name='Fecha Emision' value={formData.fecha_emision} onChange={(value: string) => handleInputChange('fecha_emision', value)} />
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='text-blue-700 flex justify-center items-center w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-800' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default NewEmployeeForm;