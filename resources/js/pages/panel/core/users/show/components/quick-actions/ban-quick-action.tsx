import {CoreUserData} from "@/types";
import {FaHammer} from "react-icons/fa6";
import * as React from "react";
import {
    CoreUserShowQuickActionsMenuItem
} from "@/pages/panel/core/users/show/components/quick-actions";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export function CoreUserShowQuickActionBan({user}: { user: CoreUserData }) {
    function handleAction() {
        console.log(`Ban ${user.uuid}`);
    }

    return <AlertDialog>
        <AlertDialogTrigger>
            <CoreUserShowQuickActionsMenuItem
                tooltip={"Bann"}
                icon={FaHammer}
                variant={"danger"}/>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    {user.last_name ?? user.uuid} vom Server ausschließen?
                </AlertDialogTitle>
                <AlertDialogDescription className={"flex flex-col gap-3"}>
                    <span>
                        Möchtest du {user.last_name ?? user.uuid} wirklich vom Server ausschließen?
                    </span>
                    <span>
                        Du musst den Bann im Anschluss noch bearbeiten. Dies soll nur als schnelle
                        Möglichkeit dienen um Benutzer vom Server auszuschließen.
                    </span>
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
                <AlertDialogAction onClick={() => handleAction()}>Ausschließen</AlertDialogAction>
                <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>;
}
