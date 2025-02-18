import { ApplicationLogo } from "@/components/ui/application-logo";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

export default function GuestLayout({
    header,
    headerDescription,
    children,
}: PropsWithChildren<{ header?: ReactNode; headerDescription?: ReactNode }>) {
    return (
        <div className="flex min-h-screen flex-col gap-6 items-center justify-center bg-neutral-100 p-4 lg:p-6">
            <Link href="/">
                <ApplicationLogo size={"2xl"} />
            </Link>

            <Card className="w-full max-w-md">
                {(header || headerDescription) && (
                    <CardHeader>
                        {header && <CardTitle>{header}</CardTitle>}
                        {headerDescription && (
                            <CardDescription>
                                {headerDescription}
                            </CardDescription>
                        )}
                    </CardHeader>
                )}
                <CardContent
                    className={header || headerDescription ? "" : "pt-6"}
                >
                    {children}
                </CardContent>
            </Card>
        </div>
    );
}
