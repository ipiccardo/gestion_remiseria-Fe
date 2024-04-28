import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[500px] w-screen rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4  w-screen" />
                <Skeleton className="h-4 w-screen" />
            </div>
        </div>
    )
}