import {CoreUserData} from "@/types";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import * as React from "react";
import {useEffect, useState} from "react";
import CoreUserShowInformationTab from "@/pages/panel/core/users/show/components/information-tab";
import {CoreUserShowQuickActions} from "@/pages/panel/core/users/show/components/quick-actions";
import {CoreUserShowBansTab} from "@/pages/panel/core/users/show/components/bans-tab";

export enum CoreUserShowTabType {
    Information = "information",
    Bans = "bans",
    Mutes = "mutes",
    Kicks = "kicks",
    Warns = "warns",
    AnticheatLogs = "anticheat_logs",
    AnticheatPunishments = "anticheat_punishments",
    Transactions = "transactions",
}

export default function CoreUserShowPage({user}: { user: CoreUserData; }) {
    const [selectedTab, setSelectedTab] = useState<CoreUserShowTabType>(CoreUserShowTabType.Information);
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");

    useEffect(() => {
        if (tab && Object.values(CoreUserShowTabType).includes(tab as any)) {
            setSelectedTab(tab as any);
        }
    }, []);

    useEffect(() => {
        history.replaceState(null, "", `?tab=${selectedTab}`);
    }, [selectedTab]);

    return <AuthenticatedLayout>
        <Head title={user.last_name ?? user.uuid ?? "/"}/>

        <CoreUserShowQuickActions user={user}/>

        <Tabs defaultValue={selectedTab} value={selectedTab}
              onValueChange={value => setSelectedTab(value as any)}>
            <TabsList>
                <TabsTrigger value={CoreUserShowTabType.Information}>Informationen</TabsTrigger>
                <TabsTrigger value={CoreUserShowTabType.Bans}>Banns</TabsTrigger>
                <TabsTrigger value={CoreUserShowTabType.Kicks}>Kicks</TabsTrigger>
                <TabsTrigger value={CoreUserShowTabType.Mutes}>Mutes</TabsTrigger>
                <TabsTrigger value={CoreUserShowTabType.Warns}>Warnungen</TabsTrigger>
                <TabsTrigger value={CoreUserShowTabType.AnticheatLogs}>Anticheat-Logs</TabsTrigger>
                <TabsTrigger
                    value={CoreUserShowTabType.AnticheatPunishments}>Anticheat-Bestrafungen</TabsTrigger>
                <TabsTrigger value={CoreUserShowTabType.Transactions}>Transaktionen</TabsTrigger>
            </TabsList>

            <CoreUserShowInformationTab user={user}/>
            <CoreUserShowBansTab user={user}/>
            <PunishKicksTab user={user}/>
            <PunishMutesTab user={user}/>
            <PunishWarnsTab user={user}/>
            <AnticheatLogsTab user={user}/>
            <AnticheatPunishmentsTab user={user}/>
            <TransactionsTab user={user}/>
        </Tabs>
    </AuthenticatedLayout>
}

function PunishMutesTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Mutes}>
        <h2>Mutes</h2>
    </TabsContent>
}

function PunishKicksTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Kicks}>
        <h2>Kicks</h2>
    </TabsContent>
}

function PunishWarnsTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Warns}>
        <h2>Warnungen</h2>
    </TabsContent>
}

function AnticheatLogsTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.AnticheatLogs}>
        <h2>Anticheat-Logs</h2>
    </TabsContent>
}

function AnticheatPunishmentsTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.AnticheatPunishments}>
        <h2>Anticheat-Bestrafungen</h2>
    </TabsContent>
}

function TransactionsTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Transactions}>
        <h2>Transaktionen</h2>
    </TabsContent>
}
