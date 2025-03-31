import {AppSidebar} from "@/components/navigation/sidebar/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {Separator} from "@/components/ui/separator";
import {SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar";
import {PageProps} from "@/types/helper-types";
import {usePage} from "@inertiajs/react";
import {ThemeProvider} from "next-themes";
import {PropsWithChildren} from "react";
import {Toaster} from "@/components/ui/sonner";

export default function AuthenticatedLayout({
                                                children,
                                            }: PropsWithChildren<{}>) {
    const page = usePage<PageProps>().props;
    const user = page.auth.user;
    const breadcrumbs = page.breadcrumbs;

    return (
        <ThemeProvider defaultTheme="dark" attribute={"class"}>
            <SidebarProvider>
                <AppSidebar user={user}/>
                <SidebarInset>
                    <header className="flex h-12 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1"/>
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumbs.map((breadcrumb, index) => (
                                        <div
                                            key={breadcrumb.title}
                                            className="flex items-center gap-1.5"
                                        >
                                            <BreadcrumbItem>
                                                <BreadcrumbLink
                                                    href={breadcrumb.url}
                                                >
                                                    {breadcrumb.title}
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>

                                            {index < breadcrumbs.length - 1 && (
                                                <BreadcrumbSeparator/>
                                            )}
                                        </div>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <main className="p-4 lg:p-6 flex flex-col gap-6 relative">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>

            <Toaster/>
        </ThemeProvider>
    );
}
