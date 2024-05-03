
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver, Vehiculo } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';
import { createVehicleAccion, editVehicleAction } from '@/app/actions/actions';

const EditForm = ({ vehicle }: { vehicle: Vehiculo }) => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1]
    const [formData, setFormData] = useState<Vehiculo>({
        id: vehicle.id,
        dominio: vehicle.dominio,
        marca: vehicle.marca,
        modelo: vehicle.modelo,
        kilometraje: vehicle.kilometraje,
        disponible: vehicle.disponible,
        idEmpleado: vehicle.idEmpleado,
        anio: vehicle.anio,
        estado: vehicle.estado,
        apellido: vehicle.apellido
    });
    const [validFields, setValidFields] = useState<Record<keyof any, boolean>>({
        id: true,
        dominio: true,
        marca: true,
        modelo: true,
        kilometraje: true,
        disponible: true,
        idEmpleado: true,
        anio: true,
        estado: true,
        apellido: true
    });
    const [showAlert, setShowAlert] = useState(false);


    const handleInputChange = (fieldName: keyof Vehiculo, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));

        validateField(fieldName, value);
    };

    const validateField = (fieldName: keyof Vehiculo, value: string) => {

        const isValid = value.trim() !== '';

        setValidFields(prevFields => ({
            ...prevFields,
            [fieldName]: isValid,
        }));
    };

    const allFieldsValid = Object.values(validFields).every(field => field);


    return (
        <>

            <form action={(formdata) => editVehicleAction(formdata, formData.id)} className='flex flex-col items-center gap-4 max-w-80  mx-auto w-full ml-0 lg:max-w-3xl border-2 p-8  border-solid shadow-lg shadow-blue-900/50 rounded'>
                <EmployeeInput type='text' name='Dominio' value={formData.dominio} onChange={(value: string) => handleInputChange('dominio', value)} />
                <EmployeeInput type='text' name='Marca' value={formData.marca} onChange={(value: string) => handleInputChange('marca', value)} />
                <EmployeeInput type='text' name='Modelo' value={formData.modelo} onChange={(value: string) => handleInputChange('modelo', value)} />
                <EmployeeInput type='text' name='Anio' value={formData.anio} onChange={(value: string) => handleInputChange('anio', value)} />
                <EmployeeInput type='select' name='Estado' value={formData.estado} onChange={(value: string) => handleInputChange('estado', value)} />
                <EmployeeInput type='select' name='Empleado' value={formData.idEmpleado} onChange={(value: string) => handleInputChange('idEmpleado', value)} />
                <EmployeeInput type='text' name='Kilometraje' value={formData.kilometraje} onChange={(value: string) => handleInputChange('kilometraje', value)} />
                <SelectInput name='Estado' data={formData.estado} onChange={(value: string) => handleInputChange('estado', value)} />
                <SelectInput name='Empleado' data={formData.apellido} onChange={(value: string) => handleInputChange('idEmpleado', value)} />
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='text-blue-700 flex justify-center items-center w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-800' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default EditForm;