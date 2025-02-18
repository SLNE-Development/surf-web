import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DefaultPagination } from "@/components/ui/default-pagination";
import { Input } from "@/components/ui/input";
import { InputDescription } from "@/components/ui/input-description";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { CreateServerTeamMember } from "@/pages/panel/team/team/create";
import { EditServerTeamMember } from "@/pages/panel/team/team/edit";
import { ServerTeamMemberData } from "@/types";
import { PaginatedModel, User } from "@/types/helper-types";
import { Head, Link, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { FaEye } from "react-icons/fa6";

export default function ServerTeamMembersIndexPage({
    users,
    members,
    query,
}: {
    users: { data: User[] };
    members: PaginatedModel<ServerTeamMemberData>;
    query: string;
}) {
    const [search, setSearch] = useState(query ?? "");

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        router.get(
            route("team.members.index"),
            {
                query: search,
            },
            {
                only: ["members", "query"],
            }
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Serverteammitglieder" />

            <Card>
                <CardHeader>
                    <CardTitle>Serverteammitglieder</CardTitle>
                    <CardDescription>
                        Verwaltung aller Serverteammitglieder.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="p-4 border rounded shadow">
                        <form onSubmit={submit} className="space-y-6">
                            <InputGroup>
                                <Label htmlFor="query">Suche</Label>
                                <Input
                                    id="query"
                                    type="text"
                                    placeholder="Suche"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <InputDescription>
                                    Suche nach Nickname.
                                </InputDescription>
                            </InputGroup>

                            <Button type="submit">Suchen</Button>
                        </form>
                    </div>

                    <div className="flex justify-end">
                        <CreateServerTeamMember users={users.data} />
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead>Id</TableHead>
                                <TableHead>Nickname</TableHead>
                                <TableHead>Aktion</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.data.map((member) => (
                                <TableRow key={member.id}>
                                    <TableCell>
                                        <div className="size-8">
                                            <img
                                                src={`https://crafatar.com/avatars/${member.minecraftUuid}`}
                                                alt="Head Render"
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell>{member.id}</TableCell>
                                    <TableCell>
                                        {member.nickname ?? "/"}
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            href={route("team.members.show", {
                                                member: member.id,
                                            })}
                                        >
                                            <Button
                                                size={"smallIcon"}
                                                variant={"ghost"}
                                            >
                                                <FaEye />
                                            </Button>
                                        </Link>
                                        <EditServerTeamMember
                                            member={member}
                                            users={users.data}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <DefaultPagination model={members} />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
