import {CoreUserData} from "@/types";
import {TabsContent} from "@/components/ui/tabs";
import {CoreUserShowTabType} from "@/pages/panel/core/users/show/page";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {formatDateTime} from "@/lib/date-utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {IconText} from "@/components/ui/icon-text";
import {FaPerson} from "react-icons/fa6";

export default function CoreUserShowInformationTab({user}: { user: CoreUserData }) {
    return <TabsContent value={CoreUserShowTabType.Information}>
        <div className={"flex flex-col gap-2"}>
            <Card>
                <CardHeader>
                    <CardTitle>Benutzerinformationen</CardTitle>
                    <CardDescription>Allgemeine Informationen über den Benutzer</CardDescription>
                </CardHeader>
                <CardContent className={"flex flex-col lg:flex-row gap-4"}>
                    <div className={"flex flex-col gap-2 items-center"}>
                        {/*<div className={"w-32"}>*/}
                        {/*    <img*/}
                        {/*        src={`https://crafatar.com/avatars/${user.uuid.replace("-", "")}?size=128&overlay`}*/}
                        {/*        alt={"Head Render"}*/}
                        {/*        className={"w-full"}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className={"w-32 hidden lg:block"}>
                            <img
                                src={`https://minotar.net/body/${user.uuid}`}
                                alt={"Body Render"}
                                className={"w-full"}
                            />
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"outline"} className={""}>
                                    <IconText icon={FaPerson} text={"Head Render"}/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Head Render von {user.last_name ?? user.uuid}
                                    </DialogTitle>
                                    <DialogDescription>
                                        Ein Head Render von {user.last_name ?? user.uuid}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className={"h-full flex flex-row items-center justify-center"}>
                                    <img
                                        src={`https://crafatar.com/avatars/${user.uuid}?size=128&overlay`}
                                        alt={"Head Render"}
                                        className={"h-full"}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"outline"} className={"lg:hidden"}>
                                    <IconText icon={FaPerson} text={"Skin Render"}/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Skin Render von {user.last_name ?? user.uuid}
                                    </DialogTitle>
                                    <DialogDescription>
                                        Ein Skin Render von {user.last_name ?? user.uuid}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className={"h-full flex flex-row items-center justify-center"}>
                                    <img
                                        src={`https://minotar.net/body/${user.uuid}`}
                                        alt={"Body Render"}
                                        className={"h-full"}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className={"w-full"}>
                        <Table>
                            <TableBody>
                                <Row title={"Id"} value={user.id}/>
                                <Row title={"Benutzername"} value={user.last_name ?? "/"}/>
                                <Row title={"UUID"} value={user.uuid}/>
                                <Row title={"Erstellt Am"} value={formatDateTime(user.created_at)}/>
                                <Row title={"Aktualisiert Am"}
                                     value={formatDateTime(user.updated_at)}/>
                            </TableBody>
                        </Table>
                    </div>
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
