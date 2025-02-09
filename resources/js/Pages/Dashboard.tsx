import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Ticket } from "@/pages/AddLike";
import { Head } from "@inertiajs/react";

export type User = {
    id: number;
    name: string;
    email: string;
    created_at?: string;
    updated_at?: string;
    attached_tickets: Ticket[];
};

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}
