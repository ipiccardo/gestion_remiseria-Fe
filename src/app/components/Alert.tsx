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

export function Alert() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <svg className="hover:fill-blue-900" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="20" height="20" fill='#1d4ed8'>
                    <path d="M23,3H18V2.5A2.5,2.5,0,0,0,15.5,0h-7A2.5,2.5,0,0,0,6,2.5V3H1V6H3V21a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6h2ZM18,21H6V6H18Z" />
                    <rect x="8" y="9" width="3" height="9" />
                    <rect x="13" y="9" width="3" height="9" />
                </svg>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button>Continue</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
