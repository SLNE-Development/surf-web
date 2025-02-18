import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import GuestLayout from "@/layouts/guest-layout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
    canResetPassword,
}: {
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout header="Anmelden">
            <Head title="Anmelden" />

            <form onSubmit={submit} className="space-y-6">
                <InputGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="info@slne.dev"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        autoComplete="email"
                        autoFocus
                    />
                    <InputError errorMessage={errors.email} />
                </InputGroup>

                <InputGroup>
                    <Label htmlFor="password">Passwort</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        autoComplete="current-password"
                    />
                    <InputError errorMessage={errors.password} />
                </InputGroup>

                <InputGroup className="flex-row">
                    <Checkbox
                        onCheckedChange={(checked) =>
                            setData("remember", Boolean(checked))
                        }
                        checked={data.remember}
                        id="remember"
                    />
                    <Label htmlFor="remember">Anmeldung speichern</Label>
                </InputGroup>

                <div className="flex flex-row items-center justify-end">
                    {canResetPassword && (
                        <Button
                            type="button"
                            variant={"link"}
                            onClick={() => {
                                window.location.href =
                                    route("password.request");
                            }}
                        >
                            Passwort vergessen?
                        </Button>
                    )}
                    <Button disabled={processing}>Anmelden</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
