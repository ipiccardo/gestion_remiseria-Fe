"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from "./SideBar"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function ResponsiveSideBar() {
    return (
        <div className="grid grid-cols-2 gap-2">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger className="w-14 h-14 bg-blue-900 border-none active:bg-blue-900" asChild>
                        <Button variant="outline">{<img src="/icons/hamburgerMenu.svg"></img>}</Button>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SideBar />
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
