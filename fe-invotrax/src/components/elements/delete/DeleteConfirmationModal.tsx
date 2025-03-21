import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { ButtonPengadaan } from "../detail/ButtonPengadaan";
import { AlertDialogDescription, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

export const DeleteConfirmationModal: React.FC<{ 
    question: string;
    message: string;
}> = ({ question, message }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <ButtonPengadaan content="Cancel Request"/>  
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{ question }</AlertDialogTitle>
                    <AlertDialogDescription>{ message }</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button variant="ghost">Cancel</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <ButtonPengadaan content="Continue"/>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

