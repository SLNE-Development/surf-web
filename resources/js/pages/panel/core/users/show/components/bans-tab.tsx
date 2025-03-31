import {BanPunishmentData, CoreUserData} from "@/types";
import {CoreUserShowTabType} from "@/pages/panel/core/users/show/page";
import {TabsContent} from "@/components/ui/tabs";
import * as React from "react";
import {PropsWithChildren} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Link, WhenVisible} from "@inertiajs/react";
import {FaCheck, FaEllipsis, FaEye, FaSpinner} from "react-icons/fa6";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {formatDateTime} from "@/lib/date-utils";
import {Badge} from "@/components/ui/badge";
import {IconText} from "@/components/ui/icon-text";
import {FaTimes} from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

export function CoreUserShowBansTab({user, bans}: {
    user: CoreUserData;
    bans: BanPunishmentData[]
}) {
    return <TabsContent value={CoreUserShowTabType.Bans}>
        <Card>
            <CardHeader>
                <CardTitle>Banns</CardTitle>
                <CardDescription>Alle Banns des Benutzers</CardDescription>
            </CardHeader>
            <CardContent>
                <WhenVisible fallback={<FaSpinner className={"animate-spin"}/>} data="bans">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Punishment Id</TableHead>
                                <TableHead>Grund</TableHead>
                                <TableHead>Erstellt Am</TableHead>
                                <TableHead>Ablaufdatum</TableHead>
                                <TableHead>Entbannt</TableHead>
                                <TableHead>Security</TableHead>
                                <TableHead>Aktionen</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bans?.map(ban => <TableRow key={ban.id}>
                                <TableCell>{ban.punishment_id}</TableCell>
                                <TableCell>{ban.reason}</TableCell>
                                <TableCell>{formatDateTime(ban.created_at)}</TableCell>
                                <TableCell>{
                                    ban.permanent ?
                                        <Badge variant={"danger"}
                                               className={"uppercase"}>Permanent</Badge> :
                                        formatDateTime(ban.expiration_date)}
                                </TableCell>
                                <TableCell>{ban.unpunished_date ? formatDateTime(ban.unpunished_date) :
                                    <Badge variant={"danger"}>
                                        <IconText icon={FaTimes} text={"Nein"}/></Badge>}
                                </TableCell>
                                <TableCell>{ban.security_ban ? <Badge variant={"success"}>
                                        <IconText icon={FaCheck} text={"Ja"}/></Badge> :
                                    <Badge variant={"danger"}>
                                        <IconText icon={FaTimes} text={"Nein"}/></Badge>}
                                </TableCell>
                                <TableCell>
                                    <ActionsDropdown ban={ban}/>
                                </TableCell>
                            </TableRow>)}
                            {(!bans || bans?.length === 0) && <TableRow>
                                <TableCell className={"text-center"} colSpan={100}>
                                    <p className={"text-muted-foreground"}>Keine Banns gefunden</p>
                                </TableCell>
                            </TableRow>}
                        </TableBody>
                    </Table>
                </WhenVisible>
            </CardContent>
        </Card>
    </TabsContent>
}

function ActionsDropdown({ban}: { ban: BanPunishmentData }) {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"smallIcon"}>
                <FaEllipsis/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"flex flex-col gap-2"} side={"left"}>
            <DropdownMenuGroup>
                <DropdownMenuLabel>Allgemeines</DropdownMenuLabel>
                <Link href={route("core.users.show", ban.punishment_id)}>
                    <ActionDropdownItem>
                        <IconText icon={FaEye} text={"Anzeigen"}/>
                    </ActionDropdownItem>
                </Link>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
}

function ActionDropdownItem({children}: PropsWithChildren) {
    return <DropdownMenuItem className={"cursor-pointer"}>
        {children}
    </DropdownMenuItem>
}
