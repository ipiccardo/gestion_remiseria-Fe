
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { driver, Trips } from '../../../../../types';
import EmployeeInput from './CustomInput';

const NewTripForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<Trips>({
        date: '',
        hour: '',
        minutes: '',
        Kms: 0,
    });
    const [validFields, setValidFields] = useState<Record<keyof Trips, boolean>>({
        date: false,
        hour: false,
        minutes: false,
        Kms: false,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [allData, setAllData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)


    useEffect(() => {
        fetch('/api/patients').then((resp) => resp.json()).then((newData) => {
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
            const driver = {
                date: formData.date,
                hour: formData.hour,
                minutes: formData.minutes,
                Kms: formData.Kms,
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
                <EmployeeInput type='text' name='Date' value={formData.date} onChange={(value: string) => handleInputChange('date', value)} />
                <EmployeeInput type='text' name='Hour' value={formData.hour} onChange={(value: string) => handleInputChange('hour', value)} />
                <EmployeeInput type='text' name='Minutes' value={formData.minutes} onChange={(value: string) => handleInputChange('minutes', value)} />
                <EmployeeInput type='text' name='Kilometres' value={formData.Kms} onChange={(value: string) => handleInputChange('Kms', value)} />
                {/* <EmployeeInput type='text' name='vehiculos Asignados' value={formData.vehiculosAsignados} onChange={(value: string) => handleInputChange('vehiculosAsignados', value)} /> */}
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href='/' className='border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-violet-700 '>Cancelar</Link>
                    <button type='submit' onClick={(e) => handleSave(e)} className={`bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-violet-800' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default NewTripForm;