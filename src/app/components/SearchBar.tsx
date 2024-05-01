'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname } from 'next/navigation'
import { useRouter, useSearchParams, redirect } from "next/navigation";

export function InputDemo() {
    const pathName = usePathname()
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleSerach = (term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            if (pathName.includes('drivers')) {
                params.set('searchdriver', term)
            } else if (pathName.includes('vehicles')) {
                params.set('searchvehicle', term)
            } else {
                params.set('searchtrip', term)
            }
        } else {
            params.delete('search')
        }

        replace(`${pathName}?${params.toString()}`)
    }


    return (
        <>
            <Input className="w-52 md:w-full border-2 border-solid border-blue-700" type="text" placeholder='Search...' onChange={(e) => handleSerach(e.target.value)} defaultValue={pathName.includes('drivers') ? searchParams.get('searchdriver')?.toString()
                : pathName.includes('vehicles') ? searchParams.get('searchvehicle')?.toString() : searchParams.get('searchtrip')?.toString()} />
            <Label className="text-blue-900 text-xs pl-2">{pathName.includes('vehicles') ? 'Vehicles' : pathName.includes('trips') ? 'Trips' : 'Drivers'}</Label>
        </>
    )
}