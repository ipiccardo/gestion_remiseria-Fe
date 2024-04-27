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
import { vehiculos } from '../../../../../data.json'
import { Vehiculo } from "../../../../../types"

export function CarsTable() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-blue-800">
                <TableRow >
                    <TableHead className=" text-white">Plate</TableHead>
                    <TableHead className="text-white">Brand</TableHead>
                    <TableHead className="text-white">Model</TableHead>
                    <TableHead className="text-white">Year</TableHead>
                    <TableHead className="text-white ">KMs</TableHead>
                    <TableHead className="text-white">Is Available</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {vehiculos.map((vehiculo: Vehiculo) => {
                    const { idVehiculo, dominio, marca, modelo, kilometraje, disponible, idEmpleado } = vehiculo;
                    return (
                        <TableRow key={idVehiculo}>
                            <TableCell className="font-medium">{dominio}</TableCell>
                            <TableCell>{marca}</TableCell>
                            <TableCell>{modelo}</TableCell>
                            <TableCell className="">{new Date().getFullYear()}</TableCell>
                            <TableCell className="font-medium">{kilometraje}</TableCell>
                            <TableCell>{disponible.toString()}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
            <TableFooter>

            </TableFooter>
        </Table>
    )
}
