import { TriangleAlert } from "lucide-react";
import {AlertDialog, 
        AlertDialogCancel,
        AlertDialogContent, 
        AlertDialogDescription, 
        AlertDialogFooter, 
        AlertDialogHeader,
        AlertDialogMedia, 
        AlertDialogTitle} from "./ui/alert-dialog";

type ErrorDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  msgError: string;
};

export default function ErrorDialog( {open, onOpenChange, msgError}: ErrorDialogProps ) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-amber-400/10 text-amber-400 dark:bg-amber-400/10 dark:text-amber-400">
                        <TriangleAlert/>
                    </AlertDialogMedia>
                    <AlertDialogTitle>Ocurrio un error al cargar los datos: </AlertDialogTitle>
                    <AlertDialogDescription>
                        {msgError}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="col-span-2 mx-auto w-full max-w-44" variant="default">
                        Aceptar
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}