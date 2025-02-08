import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AddTicketDialog, { Ticket } from "@/Pages/AddLike";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "sonner";

export type User = {
    id: number;
    name: string;
    email: string;
    created_at?: string;
    updated_at?: string;
    attached_tickets: Ticket[];
};

export default function Dashboard({
    users,
}: {
    users: {
        data: User[];
        links: {
            first: string;
            last: string;
            prev: string | null;
            next: string | null;
        };
        meta: {
            current_page: number;
            last_page: number;
            path: string;
            per_page: number;
            from: number;
            to: number;
            total: number;
            links: {
                url: string | null;
                label: string;
                active: boolean;
            }[];
        };
    };
}) {
    const paginationLinksWithoutFirstAndLast = users.meta.links.slice(
        1,
        users.meta.links.length - 1
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <Card>
                <CardHeader>
                    <CardTitle>User</CardTitle>
                    <CardDescription>All Users</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Id</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Tickets</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead>Updated At</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.data.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        {user.attached_tickets.map((ticket) => (
                                            <span key={ticket.id}>
                                                {ticket.title},{" "}
                                            </span>
                                        ))}
                                        {user.attached_tickets.length === 0 &&
                                            "/"}
                                    </TableCell>
                                    <TableCell>
                                        {user.created_at ?? "/"}
                                    </TableCell>
                                    <TableCell>
                                        {user.updated_at ?? "/"}
                                    </TableCell>
                                    <TableCell>
                                        <EditUserDialog user={user} />
                                        <AddTicketDialog user={user} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={users.links.prev ?? undefined}
                                />
                            </PaginationItem>
                            {paginationLinksWithoutFirstAndLast.map((link) => (
                                <PaginationItem key={link.url}>
                                    <PaginationLink
                                        isActive={link.active}
                                        href={link.url ?? undefined}
                                    >
                                        {link.label}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    href={users.links.next ?? undefined}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}

function EditUserDialog({ user }: { user: User }) {
    const { data, setData, post, processing, errors } = useForm<{
        name: string;
        email: string;
    }>({
        name: user.name,
        email: user.email,
    });
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleSubmit() {
        post(route("users.update", { user: user.id }), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("User updated successfully");
                setDialogOpen(false);
            },
        });
    }

    return (
        <Dialog
            open={dialogOpen}
            onOpenChange={(change) => setDialogOpen(change)}
        >
            <DialogTrigger asChild>
                <Button variant={"secondary"}>Bearbeiten</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{user.name} bearbeiten</DialogTitle>
                    <DialogDescription>
                        Hier können Sie den Benutzer bearbeiten.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    className="space-y-4"
                >
                    <div className="flex flex-col gap-4 p-2 border rounded">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 p-2 border rounded">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                        )}
                    </div>
                </form>

                <DialogFooter>
                    <DialogClose>Abbrechen</DialogClose>
                    <Button
                        disabled={processing}
                        onClick={() => handleSubmit()}
                    >
                        Speichern
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
