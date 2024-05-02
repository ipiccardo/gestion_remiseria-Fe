
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { driver, Trips } from '../../../../../types';
import EmployeeInput from '../CustomInput';
import { SelectInput } from '../selectInput';

const EditTripForm = ({ trip }: { trip: Trips }) => {
    const router = useRouter();
    const pathName = usePathname()
    const sendBack = pathName.split('/')[1]
    const [formData, setFormData] = useState<Trips>(trip);
    const [validFields, setValidFields] = useState<Record<keyof any, boolean>>({
        id: false,
        nombre: false,
        apellido: false,
        dni: false,
        fecha: false,
        patente: false,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [allData, setAllData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)


    useEffect(() => {
        fetch('/api/').then((resp) => resp.json()).then((newData) => {
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
                fecha: formData.fecha,
                nombre: formData.nombre,
                apellido: formData.apellido,
                dni: formData.dni,
                marca: formData.marca,
                modelo: formData.modelo,
                anio: formData.anio,
                patente: formData.patente,
                kilometraje: formData.kilometraje,
                kilometros_recorridos: formData.kilometros_recorridos
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
                {/* <EmployeeInput type='text' name='Price x Kilometres' value={formData.KilometerCost} onChange={(value: string) => handleInputChange('KilometerCost', value)} /> */}
                <EmployeeInput type='text' name='Total Kilometres' value={formData.kilometraje} onChange={(value: string) => handleInputChange('kilometraje', value)} />
                <EmployeeInput type='text' name='Kilometres' value={formData.kilometros_recorridos} onChange={(value: string) => handleInputChange('kilometros_recorridos', value)} />
                {/* <EmployeeInput type='text' name='Driver' value={formData.driver} onChange={(value: string) => handleInputChange('driver', value)} />
                <EmployeeInput type='text' name='Vehicle' value={formData.Vehicle} onChange={(value: string) => handleInputChange('Vehicle', value)} /> */}
                <SelectInput name='Driver' data={formData.apellido} />
                <SelectInput name='Vehicle' data={formData.patente} />
                {/* <EmployeeInput type='text' name='vehiculos Asignados' value={formData.vehiculosAsignados} onChange={(value: string) => handleInputChange('vehiculosAsignados', value)} /> */}
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href={`/${sendBack}`} className='flex justify-center items-center text-blue-700 w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' onClick={(e) => handleSave(e)} className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-blue-900' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default EditTripForm;