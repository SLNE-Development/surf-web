import { AppSidebar } from "@/components/navigation/sidebar/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Authenticated({ children }: PropsWithChildren<{}>) {
    const page = usePage().props;
    const user = page.auth.user;
    const breadcrumbs = page.breadcrumbs;

    return (
        <SidebarProvider>
            <AppSidebar user={user} />
            <SidebarInset>
                <header className="flex h-12 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((breadcrumb) => (
                                    <BreadcrumbItem key={breadcrumb.title}>
                                        <BreadcrumbLink href={breadcrumb.url}>
                                            {breadcrumb.title}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="p-4 lg:p-6  flex flex-col gap-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
