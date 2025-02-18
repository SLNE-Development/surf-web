import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { User } from "@/types/helper-types";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "sonner";

export function CreateServerTeamMember({ users }: { users: User[] }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { data, setData, processing, errors, post, reset } = useForm<{
        nickname: string;
        discord_id: string;
        minecraft_uuid: string;
        date_of_birth: string;
        first_name: string;
        gender: string;
        personal_email: string;
        phone_number: string;
        recruitment_date: string;
        team_email: string;
        user_id: number;
    }>({
        nickname: "",
        discord_id: "",
        minecraft_uuid: "",
        date_of_birth: "",
        first_name: "",
        gender: "MALE",
        personal_email: "",
        phone_number: "",
        recruitment_date: new Date().toISOString().split("T")[0],
        team_email: "",
        user_id: users.length > 0 ? users[0].id : 0,
    });

    function submit() {
        const promise = new Promise((resolve, reject) => {
            post(route("team.members.store"), {
                only: ["members", "users"],
                preserveScroll: true,
                preserveState: true,
                onError: (errors) => reject(errors),
                onSuccess: () => {
                    reset();
                    setDialogOpen(false);
                    resolve(null);
                },
            });
        });

        toast.promise(promise, {
            loading: "Serverteammitglied wird erstellt...",
            success: "Serverteammitglied wurde erstellt.",
            error: "Serverteammitglied konnte nicht erstellt werden.",
        });
    }

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button>
                    <FaPlus />
                    <span>Erstellen</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Serverteammitglied erstellen</DialogTitle>
                    <DialogDescription>
                        Erstelle ein neues Serverteammitglied.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit();
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            submit();
                        }
                    }}
                    className="space-y-6"
                >
                    <InputGroup>
                        <Label htmlFor="nickname">Nickname</Label>
                        <Input
                            id="nickname"
                            value={data.nickname}
                            placeholder="Nickname"
                            type="text"
                            onChange={(e) =>
                                setData("nickname", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.nickname} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="discord_id">Discord ID</Label>
                        <Input
                            id="discord_id"
                            value={data.discord_id}
                            placeholder="Discord ID"
                            type="text"
                            onChange={(e) =>
                                setData("discord_id", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.discord_id} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="minecraft_uuid">Minecraft UUID</Label>
                        <Input
                            id="minecraft_uuid"
                            value={data.minecraft_uuid}
                            placeholder="Minecraft UUID"
                            type="text"
                            onChange={(e) =>
                                setData("minecraft_uuid", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.minecraft_uuid} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="date_of_birth">Geburtsdatum</Label>
                        <Input
                            id="date_of_birth"
                            value={data.date_of_birth}
                            type="date"
                            onChange={(e) =>
                                setData("date_of_birth", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.date_of_birth} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="first_name">Vorname</Label>
                        <Input
                            id="first_name"
                            value={data.first_name}
                            placeholder="Vorname"
                            type="text"
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.first_name} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="gender">Geschlecht</Label>

                        <Select
                            onValueChange={(value) => setData("gender", value)}
                            defaultValue={data.gender}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Geschlecht" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="MALE">Männlich</SelectItem>
                                <SelectItem value="FEMALE">Weiblich</SelectItem>
                                <SelectItem value="OTHER">Divers</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError errorMessage={errors.gender} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="personal_email">Private Email</Label>
                        <Input
                            id="personal_email"
                            value={data.personal_email}
                            placeholder="Private Email"
                            type="email"
                            onChange={(e) =>
                                setData("personal_email", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.personal_email} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="phone_number">Telefonnummer</Label>
                        <Input
                            id="phone_number"
                            value={data.phone_number}
                            placeholder="Telefonnummer"
                            type="text"
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.phone_number} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="recruitment_date">
                            Einstellungsdatum
                        </Label>
                        <Input
                            id="recruitment_date"
                            value={data.recruitment_date}
                            type="date"
                            onChange={(e) =>
                                setData("recruitment_date", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.recruitment_date} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="team_email">Team Email</Label>
                        <Input
                            id="team_email"
                            value={data.team_email}
                            placeholder="Team Email"
                            type="email"
                            onChange={(e) =>
                                setData("team_email", e.target.value)
                            }
                        />
                        <InputError errorMessage={errors.team_email} />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="user_id">Benutzer</Label>

                        <Select
                            onValueChange={(value) =>
                                setData("user_id", Number(value))
                            }
                            defaultValue={data.user_id.toString()}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Benutzer" />
                            </SelectTrigger>
                            <SelectContent>
                                {users.map((user) => (
                                    <SelectItem
                                        key={user.id}
                                        value={user.id.toString()}
                                    >
                                        {user.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError errorMessage={errors.user_id} />
                    </InputGroup>
                </form>

                <DialogFooter>
                    <DialogClose>Abbrechen</DialogClose>
                    <Button
                        type="submit"
                        disabled={processing}
                        onClick={submit}
                    >
                        <FaPlus />
                        <span>Erstellen</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
