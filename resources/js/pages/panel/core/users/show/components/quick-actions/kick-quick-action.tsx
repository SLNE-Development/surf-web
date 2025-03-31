import {CoreUserData} from "@/types";
import {FaShoePrints} from "react-icons/fa6";
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

export function CoreUserShowQuickActionKick({user}: { user: CoreUserData }) {
    function handleAction() {
        console.log(`Kick ${user.uuid}`);
    }

    return <AlertDialog>
        <AlertDialogTrigger>
            <CoreUserShowQuickActionsMenuItem
                tooltip={"Kick"}
                icon={FaShoePrints}
                variant={"warning"}/>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    {user.last_name ?? user.uuid} vom Server schmeißen?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Möchtest du {user.last_name ?? user.uuid} wirklich vom Server schmeißen?
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
                <AlertDialogAction onClick={() => handleAction()}>Kicken</AlertDialogAction>
                <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>;
}
