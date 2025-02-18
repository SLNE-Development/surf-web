import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/input-error";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";
import { toast } from "sonner";

export default function UpdatePasswordForm() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, errors, put, reset, processing } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success("Passwort erfolgreich aktualisiert.");
            },
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();

                    toast.error(errors.password);
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();

                    toast.error("Das aktuelle Passwort ist nicht korrekt.");
                }
            },
        });
    };

    return (
        <form onSubmit={updatePassword} className="space-y-4">
            <InputGroup>
                <Label htmlFor="current_password">Aktuelles Passwort</Label>
                <Input
                    id="current_password"
                    placeholder="Aktuelles Passwort"
                    value={data.current_password}
                    onChange={(e) =>
                        setData("current_password", e.target.value)
                    }
                    type="password"
                    autoComplete="current-password"
                />
                <InputError errorMessage={errors.current_password} />
            </InputGroup>

            <InputGroup>
                <Label htmlFor="password">Neues Passwort</Label>
                <Input
                    id="password"
                    placeholder="Neues Passwort"
                    ref={passwordInput}
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    type="password"
                    autoComplete="new-password"
                />
                <InputError errorMessage={errors.password} />
            </InputGroup>

            <InputGroup>
                <Label htmlFor="password_confirmation">
                    Neues Passwort bestätigen
                </Label>
                <Input
                    id="password_confirmation"
                    placeholder="Neues Passwort bestätigen"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    type="password"
                    autoComplete="new-password"
                />
                <InputError errorMessage={errors.password_confirmation} />
            </InputGroup>

            <Button disabled={processing}>Speichern</Button>
        </form>
    );
}
