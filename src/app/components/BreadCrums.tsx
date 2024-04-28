'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useRouter, useSearchParams, redirect } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbWithCustomSeparator() {
    const pathName = usePathname()
    const searchParams = useSearchParams();
    const router = useRouter();

    return (
        <Breadcrumb className="px-8 ">
            <BreadcrumbList>
                <BreadcrumbItem>

                    <Link href="/" className="text-white md:text-blue-900">Home</Link>

                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className='text-white md:text-blue-900'>{pathName.includes('vehicles') ? 'Vehicles' : pathName.includes('trips') ? 'Trips' : 'Drivers'}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className='text-white md:text-blue-900'>{pathName.includes('createvehicle')
                        ? 'Create Vehicles' : pathName.includes('createtrip')
                            ? 'Create Trips' : pathName.includes('editemployee')
                                ? 'Edit Driver' : pathName.includes('editvehicle')
                                    ? 'Edit Vehicle' : pathName.includes('edittrip')
                                        ? 'Edit Trip' : pathName.includes('createemployee') &&
                                        'Create Drivers'}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
