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
import { trips } from '../../../../../data.json'

export function TripsTable() {


    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-blue-800">
                <TableRow >
                    <TableHead className=" text-white">Date</TableHead>
                    <TableHead className="text-white">Hour</TableHead>
                    <TableHead className="text-white">Minutes</TableHead>
                    <TableHead className="text-white">Kms</TableHead>
                    <TableHead className="text-white ">KMs</TableHead>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Surname</TableHead>
                    <TableHead className="text-white ">Plate</TableHead>
                    <TableHead className="text-white ">Brand</TableHead>
                    <TableHead className="text-white ">Model</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {trips.map((trip: any) => {
                    const { date, hour, minutes, Kms, name, surname, plate, brand, model, id } = trip;
                    return (
                        <TableRow key={id}>
                            <TableCell className="font-medium">{name}</TableCell>
                            <TableCell>{surname}</TableCell>
                            <TableCell>{plate}</TableCell>
                            <TableCell>{brand}</TableCell>
                            <TableCell>{model}</TableCell>
                            <TableCell>{date}</TableCell>
                            <TableCell>{hour}:{minutes}</TableCell>
                            <TableCell>{Kms}</TableCell>
                            <TableCell>{brand}</TableCell>
                            <TableCell>{model}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
            <TableFooter>

            </TableFooter>
        </Table>
    )
}
