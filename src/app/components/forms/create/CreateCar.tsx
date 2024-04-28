
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { driver, Vehiculo } from '../../../../../../types';
import EmployeeInput from '../CustomInput';

const NewCarForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<Vehiculo>({
        dominio: '',
        marca: '',
        modelo: '',
        kilometraje: 0,
        disponible: true,
        idVehiculo: 0,
        idEmpleado: 0
    });
    const [validFields, setValidFields] = useState<Record<keyof Vehiculo, boolean>>({
        dominio: false,
        marca: false,
        modelo: false,
        kilometraje: false,
        disponible: false,
        idEmpleado: false,
        idVehiculo: false,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [allData, setAllData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)


    useEffect(() => {
        fetch('/api/cars').then((resp) => resp.json()).then((newData) => {
            if (dataUpdated) {
                router.push('/')
                setDataUpdated(false)
            }
            setAllData(newData.data)
        })
    }, [dataUpdated])


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

    const handleSave = (e: any) => {
        e.preventDefault()
        if (allFieldsValid) {
            const car = {
                dominio: formData.dominio,
                marca: formData.marca,
                modelo: formData.modelo,
                kilometraje: formData.kilometraje,
                disponible: formData.disponible,
                idEmpleado: new Date().getTime()
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
                <EmployeeInput type='text' name='Dominio' value={formData.dominio} onChange={(value: string) => handleInputChange('dominio', value)} />
                <EmployeeInput type='text' name='Marca' value={formData.marca} onChange={(value: string) => handleInputChange('marca', value)} />
                <EmployeeInput type='text' name='Modelo' value={formData.modelo} onChange={(value: string) => handleInputChange('modelo', value)} />
                {/* <EmployeeInput type='text' name='Licencia' value={formData.idLicencia} onChange={(value: string) => handleInputChange('idLicencia', value)} />
                <EmployeeInput type='text' name='vehiculos Asignados' value={formData.vehiculosAsignados} onChange={(value: string) => handleInputChange('vehiculosAsignados', value)} /> */}
                {showAlert && <p className="text-red-500">Por favor complete todos los campos obligatorios.</p>}
                <div className='flex gap-2 pb-8 pt-4 justify-end w-full'>
                    <Link href='/' className='text-blue-700 flex justify-center items-center w-32 border-blue-700 border-2 rounded p-3 hover:border-blue-900 hover:text-blue-900 '>Cancelar</Link>
                    <button type='submit' onClick={(e) => handleSave(e)} className={`flex justify-center items-center w-32 bg-blue-700 text-white p-3 rounded  border-blue-700 ${allFieldsValid ? 'hover:bg-violet-800' : 'cursor-not-allowed'}`}>Guardar</button>
                </div>
            </form>
        </>
    );
};

export default NewCarForm;