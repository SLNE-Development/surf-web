import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import GuestLayout from "@/layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout header="Passwort vergessen">
            <Head title="Passwort vergessen" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Passwort vergessen? Kein Problem. Lass uns einfach deine
                Email-Adresse wissen und wir senden dir einen Link zum
                Zurücksetzen des Passworts per Email, der es dir ermöglicht, ein
                neues zu wählen.
            </div>

            <form onSubmit={submit} className="space-y-6">
                <InputGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="info@slne.dev"
                        value={data.email}
                        autoFocus
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError errorMessage={errors.email} />
                </InputGroup>

                <div className="flex flex-row items-center justify-end">
                    <Button
                        type="button"
                        variant={"link"}
                        onClick={() => {
                            window.location.href = route("login");
                        }}
                    >
                        Anmelden?
                    </Button>
                    <Button disabled={processing}>Absenden</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
