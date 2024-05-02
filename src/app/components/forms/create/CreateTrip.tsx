
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver, Trips } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';

const NewTripForm = () => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1]
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
    const [validFields, setValidFields] = useState<Record<keyof Trips, boolean>>({
        id: false,
        nombre: false,
        apellido: false,
        dni: false,
        fecha: false,
        patente: false,
        kilometros: false,
        precio_kilometro: false,
        id_vehiculo: false,
        marca: false,
        modelo: false,
        id_empleado: false,
        kilometros_recorridos: false,
        anio: false

    });
    const [showAlert, setShowAlert] = useState(false);
    const [allData, setAllData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)


    useEffect(() => {
        fetch('/api/empleados').then((resp) => resp.json()).then((newData) => {
            if (dataUpdated) {
                router.push('/')
                setDataUpdated(false)
            }
            setAllData(newData.data)
        })
    }, [dataUpdated])


    const handleInputChange = (fieldName: keyof Trips, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
        // Validar el campo
        validateField(fieldName, value);
    };

    const validateField = (fieldName: keyof Trips, value: string) => {
        // Validar si el valor está presente
        const isValid = value.trim() !== '';
        // Actualizar el estado de validez del campo
        setValidFields(prevFields => ({
            ...prevFields,
            [fieldName]: isValid,
        }));
    };

    const allFieldsValid = Object.values(validFields).every(field => field);

    const handleSave = (e: any) => {
        e.preventDefault()
        if (allFieldsValid) {
            const trip = {
                date: formData.fecha,
                Kms: formData.kilometros,
                KilometerCost: formData.precio_kilometro,
                totalKilometers: formData.kilometros_recorridos,
                driver: formData.apellido,
                Vehicle: formData.modelo,
                // vehiculosAsignados: formData.vehiculosAsignados,
                // idEmpleado: new Date().getTime()
            };

            // dispatch(updateFormFields(formData));
            // api.add(paciente).then(() => {
            //     // router.push('/'),
            //     setDataUpdated(true)

            // })
            //     .catch((error) => {
            //         console.error('Error al agregar paciente:', error);
            //         setShowAlert(true);
            //     });

        } else {
            setShowAlert(true);
        }
    };



    return (
        <>
            <form className='flex flex-col items-center gap-4 max-w-80  mx-auto w-full ml-0 lg:max-w-3xl border-2 p-8  border-solid shadow-lg shadow-blue-900/50 rounded'>
                <EmployeeInput type='text' name='Date' value={formData.fecha} onChange={(value: string) => handleInputChange('fecha', value)} />
                <EmployeeInput type='text' name='Price x Kilometres' value={formData.precio_kilometro} onChange={(value: string) => handleInputChange('precio_kilometro', value)} />
                <EmployeeInput type='text' name='Total Kilometres' value={formData.kilometros_recorridos} onChange={(value: string) => handleInputChange('kilometros_recorridos', value)} />
                <EmployeeInput type='text' name='Kilometres' value={formData.kilometros} onChange={(value: string) => handleInputChange('kilometros', value)} />
                <SelectInput name='Driver' data={formData.apellido} />
                <SelectInput name='Vehicle' data={formData.modelo} />
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='flex justify-center items-center text-blue-700 w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' onClick={(e) => handleSave(e)} className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-900' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default NewTripForm;