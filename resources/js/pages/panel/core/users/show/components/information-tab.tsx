import {CoreUserData} from "@/types";
import {TabsContent} from "@/components/ui/tabs";
import {CoreUserShowTabType} from "@/pages/panel/core/users/show/page";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {formatDateTime} from "@/lib/date-utils";

export default function CoreUserShowInformationTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Information}>
        <div className={"flex flex-col gap-2"}>
            <Card>
                <CardHeader>
                    <CardTitle>Benutzerinformationen</CardTitle>
                    <CardDescription>Allgemeine Informationen über den Benutzer</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            <Row title={"Id"} value={user.id}/>
                            <Row title={"Benutzername"} value={user.last_name ?? "/"}/>
                            <Row title={"UUID"} value={user.uuid}/>
                            <Row title={"Erstellt Am"} value={formatDateTime(user.created_at)}/>
                            <Row title={"Aktualisiert Am"} value={formatDateTime(user.updated_at)}/>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Namensverlauf</CardTitle>
                    <CardDescription>Der Namensverlauf des Benutzers</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Benutzername</TableHead>
                                <TableHead>Erstellt Am</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {user.name_histories.map(history => <TableRow key={history.id}>
                                <TableCell>{history.name}</TableCell>
                                <TableCell>{formatDateTime(history.created_at)}</TableCell>
                            </TableRow>)}
                            {user.name_histories.length === 0 && <TableRow>
                                <TableCell colSpan={2} className={"text-center"}>Keine Einträge
                                    vorhanden</TableCell>
                            </TableRow>}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    </TabsContent>
}

function Row({title, value}: { title: string; value: string | number }) {
    return <TableRow>
        <TableHead>{title}</TableHead>
        <TableCell>{value}</TableCell>
    </TableRow>
}
