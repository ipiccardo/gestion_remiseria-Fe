
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';
import { driverApi } from '../../../../api'
import { DialogDemo } from '../../Dialog';
import { editEmployeeAction } from '@/app/actions/actions';



const EditEmployeeForm = ({ driver }: { driver: driver }) => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1]
    const formatedDate = driver.fecha_emision.split('T')
    const correctDate = formatedDate[0]
    const [formData, setFormData] = useState<driver>({
        id: driver.id,
        nombre: driver.nombre,
        apellido: driver.apellido,
        dni: driver.dni,
        tipo: driver.tipo,
        fecha_emision: correctDate,
    });
    const [validFields, setValidFields] = useState<Record<keyof any, boolean>>({
        id: true,
        nombre: true,
        apellido: true,
        dni: true,
        tipo: true,
        fecha_emision: true,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [allData, setAllData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)
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

            <form action={(formdata) => editEmployeeAction(formdata, driver.id)} className='flex flex-col items-center gap-4 max-w-80  mx-auto w-full ml-0 lg:max-w-3xl border-2 p-8  border-solid shadow-lg shadow-blue-900/50 rounded'>
                <EmployeeInput type='text' name='Nombre' value={formData.nombre} onChange={(value: string) => handleInputChange('nombre', value)} />
                <EmployeeInput type='text' name='Apellido' value={formData.apellido} onChange={(value: string) => handleInputChange('apellido', value)} />
                <EmployeeInput type='text' name='DNI' value={formData.dni} onChange={(value: string) => handleInputChange('dni', value)} />
                <EmployeeInput type='text' name='Fecha Emision' value={formData.fecha_emision} onChange={(value: string) => handleInputChange('fecha_emision', value)} />
                <SelectInput name='Tipo' data={formData.tipo} />
                <EmployeeInput type='text' name='tipo' value={formData.tipo} onChange={(value: string) => handleInputChange('tipo', value)} />
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='text-blue-700 flex justify-center items-center w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-800' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default EditEmployeeForm;