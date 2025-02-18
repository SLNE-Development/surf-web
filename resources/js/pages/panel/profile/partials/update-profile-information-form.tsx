import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { PageProps } from "@/types/helper-types";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function UpdateProfileInformationForm({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"), {
            onSuccess: () => {
                toast.success("Profilinformationen erfolgreich aktualisiert.");
            },
            onError: (errors) => {
                if (errors.name) {
                    toast.error(errors.name);
                }

                if (errors.email) {
                    toast.error(errors.email);
                }
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <InputGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="Name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    autoFocus
                    autoComplete="name"
                />
                <InputError errorMessage={errors.name} />
            </InputGroup>

            <InputGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="Email"
                    className="mt-1 block w-full"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    autoComplete="email"
                />
                <InputError errorMessage={errors.email} />
            </InputGroup>

            {mustVerifyEmail && user.email_verified_at === null && (
                <div>
                    <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                        Deine Emailadresse ist nicht verifiziert. Bitte
                        überprüfe deine Emails auf eine Verifizierungsmail.
                        <Button
                            variant={"link"}
                            onClick={() => {
                                window.location.href =
                                    route("verification.send");
                            }}
                        >
                            Klicke hier, um die Verifizierungsmail erneut zu
                            senden.
                        </Button>
                    </p>

                    {status === "verification-link-sent" && (
                        <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                            Eine neue Verifizierungsmail wurde an deine
                            Emailadresse gesendet.
                        </div>
                    )}
                </div>
            )}

            <Button disabled={processing}>Speichern</Button>
        </form>
    );
}
