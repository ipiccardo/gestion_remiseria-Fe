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
import Link from "next/link";
import { Alert } from "../Alert";

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
                    <TableHead className="text-white flex justify-center items-center">Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {trips.map((trip: any) => {
                    const { date, hour, minutes, Kms, name, surname, plate, brand, model, tripId } = trip;
                    return (
                        <TableRow key={tripId}>
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
                            <TableCell><div className="flex cursor-pointer gap-3 justify-center">
                                <Link href={`/trips/edittrip/${tripId}`} className={`flex justify-center`}>
                                    <svg className="hover:fill-blue-900" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="20" height="20" fill='#1d4ed8'>
                                        <path d="M21,11.5V15H18a3,3,0,0,0-3,3v3H4.5A1.5,1.5,0,0,1,3,19.5V4.5A1.5,1.5,0,0,1,4.5,3h9A1.5,1.5,0,0,0,15,1.5h0A1.5,1.5,0,0,0,13.5,0h-9A4.5,4.5,0,0,0,0,4.5v15A4.5,4.5,0,0,0,4.5,24H16.484a4.5,4.5,0,0,0,3.181-1.317l3.017-3.017A4.5,4.5,0,0,0,24,16.485V11.5A1.5,1.5,0,0,0,22.5,10h0A1.5,1.5,0,0,0,21,11.5Z" />
                                        <path d="M17.793,1.793l-12.5,12.5A1,1,0,0,0,5,15v3a1,1,0,0,0,1,1H9a1,1,0,0,0,.707-.293L22.038,6.376a3.379,3.379,0,0,0,.952-3.17A3.118,3.118,0,0,0,17.793,1.793Z" />
                                    </svg>
                                </Link>
                                <div className={`flex justify-center`}>
                                    <Alert id={tripId} />
                                </div>

                            </div></TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
            <TableFooter>

            </TableFooter>
        </Table>
    )
}
