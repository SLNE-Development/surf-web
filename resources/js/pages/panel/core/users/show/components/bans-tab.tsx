import {CoreUserData} from "@/types";
import {CoreUserShowTabType} from "@/pages/panel/core/users/show/page";
import {TabsContent} from "@/components/ui/tabs";
import * as React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export function CoreUserShowBansTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Bans}>
        <Card>
            <CardHeader>
                <CardTitle>Banns</CardTitle>
                <CardDescription>Alle Banns des Benutzers</CardDescription>
            </CardHeader>
            <CardContent>
                <h2>Bans</h2>
            </CardContent>
        </Card>
    </TabsContent>
}
