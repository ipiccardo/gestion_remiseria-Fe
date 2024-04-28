'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname } from 'next/navigation'

export function InputDemo({ params }: { params: { slug: string } }) {
    const pathName = usePathname()



    return (
        <>
            <Input className="border-2 border-solid border-blue-700" type="text" placeholder='Search...' />
            <Label className="text-blue-900 text-xs pl-2">{pathName.includes('vehicles') ? 'Vehicles' : pathName.includes('trips') ? 'Trips' : 'Drivers'}</Label>
        </>
    )
}