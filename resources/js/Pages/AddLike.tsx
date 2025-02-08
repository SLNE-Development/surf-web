import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { User } from "@/pages/Dashboard";
import { router } from "@inertiajs/react";
import axios from "axios";
import { debounce } from "lodash";
import { useState } from "react";
import { toast } from "sonner";

export type Ticket = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
};

function AddTicketDialog({ user }: { user: User }) {
    const [processing, setProcessing] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<Ticket[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    function selectTicket(ticket: Ticket | null) {
        setSelectedTicket(ticket);
    }

    const handleSearch = debounce(async (term) => {
        if (term.length < 3) {
            setSearchResults([]);
            return;
        }
        try {
            const { data } = await axios.get("/api/tickets/search", {
                params: { query: term },
            });
            setSearchResults(data.data);
        } catch (error) {
            console.error("Fehler bei der Suche:", error);
        }
    }, 300);

    function handleSubmit() {
        if (!selectedTicket) return;

        setProcessing(true);
        axios
            .post(route("users.addTicket", { user: user }), {
                ticket_id: selectedTicket.id,
            })
            .then(() => {
                setProcessing(false);
                toast.success("Ticket hinzugefügt!");
                setDialogOpen(false);

                router.visit(window.location.href, {
                    preserveScroll: true,
                    preserveState: true,
                    only: ["users"],
                });
            })
            .catch((error) => {
                setProcessing(false);
                console.error("Fehler beim Hinzufügen des Tickets:", error);
                toast.error("Fehler beim Hinzufügen des Tickets.");
            });
    }

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">Ticket hinzufügen</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ticket hinzufügen</DialogTitle>
                    <DialogDescription>
                        Wähle ein Ticket aus, um es dem Benutzer hinzuzufügen.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <Label htmlFor="search">Ticket suchen</Label>
                    <Input
                        id="search"
                        placeholder="Mindestens 3 Buchstaben eingeben..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            handleSearch(e.target.value);
                        }}
                    />
                    {searchResults.length > 0 && (
                        <div className="max-h-40 overflow-y-auto border rounded p-2">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Created At</TableHead>
                                        <TableHead>Auswählen</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {searchResults.map((ticket) => (
                                        <TableRow key={ticket.id}>
                                            <TableCell>
                                                {ticket.title}
                                            </TableCell>
                                            <TableCell>
                                                {ticket.created_at ?? "/"}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() =>
                                                        selectTicket(ticket)
                                                    }
                                                >
                                                    Auswählen
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                    {selectedTicket && (
                        <div className="flex flex-col gap-1">
                            <span className="uppercase font-semibold">
                                Ausgewählt:
                            </span>
                            <span>
                                <b>Title:</b> {selectedTicket.title}
                            </span>
                            <span>
                                <b>Beschreibung:</b>{" "}
                                {selectedTicket.description}
                            </span>
                            <Button
                                variant="outline"
                                onClick={() => selectTicket(null)}
                            >
                                Auswahl aufheben
                            </Button>
                        </div>
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <Button
                        variant="outline"
                        onClick={() => setDialogOpen(false)}
                    >
                        Abbrechen
                    </Button>
                    <Button
                        disabled={!selectedTicket || processing}
                        onClick={handleSubmit}
                    >
                        Speichern
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default AddTicketDialog;
