'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Button from "../components/Button"
import { empleados, vehiculos, licencias, liquidaciones, trips } from '../../../data.json'
import { useEffect, useState } from "react"


export function Alert({ id, type }: any) {

    const [datoAliminar, setDatoAEliminar] = useState<any>({})

    const handleClick = () => {

        if (type === "vehiculo") {
            const data = vehiculos.find((vehiculo) => {
                return vehiculo.idVehiculo === id;
            });
            setDatoAEliminar(data);

            return
        } else if (type === "conductor") {
            const data = empleados.find((empleado) => {
                return empleado.idEmpleado.toString() === id.toString();
            });

            setDatoAEliminar(data);
            return
        } else if (type === "viaje") {
            const data = trips.find((viaje) => {
                return viaje.tripId === id;
            });
            setDatoAEliminar(data);
            return
        }

    }




    return (
        <AlertDialog>
            <AlertDialogTrigger asChild onClick={handleClick}>
                <svg className="hover:fill-blue-900" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="20" height="20" fill='#1d4ed8'>
                    <path d="M23,3H18V2.5A2.5,2.5,0,0,0,15.5,0h-7A2.5,2.5,0,0,0,6,2.5V3H1V6H3V21a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6h2ZM18,21H6V6H18Z" />
                    <rect x="8" y="9" width="3" height="9" />
                    <rect x="13" y="9" width="3" height="9" />
                </svg>
            </AlertDialogTrigger>
            <AlertDialogContent className='w-48 md:w-full'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {`This action cannot be undone. you will eliminate`}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="outline-none text-base flex items-center justify-center w-32 p-2 rounded border-blue-700 border-solid border-2 text-blue-700 bg-white hover:border-blue-900 hover:text-blue-900">Cancel</AlertDialogCancel>
                    <Button>Continue</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
