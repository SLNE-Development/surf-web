import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import UpdatePasswordForm from "@/pages/panel/profile/partials/update-password-form";
import UpdateProfileInformationForm from "@/pages/panel/profile/partials/update-profile-information-form";
import { PageProps } from "@/types/helper-types";
import { Head } from "@inertiajs/react";

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout>
            <Head title="Profil" />

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Profilinformationen</CardTitle>
                        <CardDescription>
                            Aktualisiere deine Profilinformationen und
                            E-Mail-Adresse.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Passwort aktualisieren</CardTitle>
                        <CardDescription>
                            Aktualisiere dein Passwort. Stelle sicher, dass dein
                            Account ein langes und sicheres Passwort verwendet.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <UpdatePasswordForm />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
