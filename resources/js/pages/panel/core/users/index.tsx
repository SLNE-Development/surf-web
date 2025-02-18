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
import { CoreUserData } from "@/types";
import { PaginatedModel } from "@/types/helper-types";
import { Head, Link, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { FaEye } from "react-icons/fa6";

export default function CoreUserIndexPage({
    users,
    query,
}: {
    users: PaginatedModel<CoreUserData>;
    query: string;
}) {
    const [search, setSearch] = useState(query ?? "");

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        router.get(
            route("core.users.index"),
            {
                query: search,
            },
            {
                only: ["users", "query"],
            }
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Spielerverwaltung" />

            <Card>
                <CardHeader>
                    <CardTitle>Spielerverwaltung</CardTitle>
                    <CardDescription>
                        Verwaltung aller Spieler, die jemals auf dem Netzwerk
                        waren.
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
                                    Suche nach Benutzernamen oder UUIDs.
                                </InputDescription>
                            </InputGroup>

                            <Button type="submit">Suchen</Button>
                        </form>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead>Id</TableHead>
                                <TableHead>UUID</TableHead>
                                <TableHead>Benutzername</TableHead>
                                <TableHead>Aktion</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.data.map((user: any) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="size-8">
                                            <img
                                                src={`https://crafatar.com/avatars/${user.uuid}`}
                                                alt="Head Render"
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.uuid}</TableCell>
                                    <TableCell>
                                        {user.last_name ?? "/"}
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            href={route("core.users.show", {
                                                user: user.uuid,
                                            })}
                                        >
                                            <Button
                                                size={"smallIcon"}
                                                variant={"ghost"}
                                            >
                                                <FaEye />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <DefaultPagination model={users} />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
