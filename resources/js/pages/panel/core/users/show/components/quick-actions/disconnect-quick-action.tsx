import {CoreUserData} from "@/types";
import {FaTowerBroadcast} from "react-icons/fa6";
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

export function CoreUserShowQuickActionDisconnect({user}: { user: CoreUserData }) {
    function handleAction() {
        console.log(`Disconnect ${user.uuid}`);
    }

    return <AlertDialog>
        <AlertDialogTrigger>
            <CoreUserShowQuickActionsMenuItem
                tooltip={"Verbindung trennen"}
                icon={FaTowerBroadcast}
                variant={"warning"}/>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Verbindung von {user.last_name ?? user.uuid} vom Server trennen?
                </AlertDialogTitle>
                <AlertDialogDescription className={"flex flex-col gap-3"}>
                    <span>Möchtest du die Verbindung von {user.last_name ?? user.uuid} wirklich vom Server
                    trennen? Dies soll als Möglichkeit dienen um Benutzer vom Server zu trennen ohne
                    ihn zu kicken.</span>
                    <span>Visuell bekommt der Benutzer einen Fehler aller <span
                        className={"font-bold"}>"Internal Server Error:
                    Connection Reset"</span> angezeigt und wird anschließend disconnected.</span>
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
                <AlertDialogAction onClick={() => handleAction()}>Verbindung
                    trennen</AlertDialogAction>
                <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>;
}
