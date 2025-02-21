import { ApplicationLogo } from "@/components/ui/application-logo";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@inertiajs/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="light" attribute={"class"}>
            <header className="flex flex-row items-center h-20 bg-sky-400 border-b-2 border-white shadow fixed w-full top-0 left-0 right-0 z-10">
                <div className="container flex flex-row items-center gap-4">
                    <ApplicationLogo size={"sm"} />
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href={route("blog.index")}>HOME</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href={route("blog.index")}>BLOG</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>

            <main className="pt-20 bg-background min-h-screen">
                <div className="container p-4 lg:p-6 flex flex-col gap-4 lg:gap-6">
                    {children}
                </div>
            </main>
        </ThemeProvider>
    );
}
