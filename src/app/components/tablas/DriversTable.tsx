import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { empleados, vehiculos, licencias, liquidaciones } from '../../../../../data.json'

export function DriversTable() {


    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-blue-800">
                <TableRow >
                    <TableHead className=" text-white">Name</TableHead>
                    <TableHead className="text-white">Surname</TableHead>
                    <TableHead className="text-white">Licence</TableHead>
                    <TableHead className="text-white">DNI</TableHead>
                    <TableHead className="text-white ">KMs</TableHead>
                    <TableHead className="text-white">Month</TableHead>
                    <TableHead className="text-white">Licence Type</TableHead>
                    <TableHead className="text-white ">Emision Date</TableHead>
                    <TableHead className="text-white ">Able</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {empleados.map((empleado) => (
                    <TableRow key={empleado.idEmpleado}>
                        <TableCell className="font-medium">{empleado.nombre}</TableCell>
                        <TableCell>{empleado.apellido}</TableCell>
                        <TableCell>{empleado.dni}</TableCell>
                        <TableCell className="">{licencias.find((licencia) => licencia.idLicencia === empleado.idLicencia)?.tipo}</TableCell>
                        <TableCell className="font-medium">{vehiculos.filter((vehicle) => vehicle.idEmpleado === empleado.idEmpleado).reduce((acc, vehicle) => acc + vehicle.kilometraje, 0)}</TableCell>
                        <TableCell>{liquidaciones.find((employee) => empleado.idEmpleado === employee.idEmpleado)?.sueldo}</TableCell>
                        <TableCell>{licencias.find((licencia) => licencia.idLicencia === empleado.idLicencia)?.tipo}</TableCell>
                        <TableCell className="">{'invoice'}</TableCell>
                        <TableCell className="">{'invoice'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>

            </TableFooter>
        </Table>
    )
}
