import { NavMain } from "@/components/navigation/sidebar/nav-main";
import { NavProjects } from "@/components/navigation/sidebar/nav-projects";
import { NavSecondary } from "@/components/navigation/sidebar/nav-secondary";
import { NavUser } from "@/components/navigation/sidebar/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import {
    FaBookSkull,
    FaGears,
    FaGlobe,
    FaHammer,
    FaMap,
    FaServer,
    FaSliders,
    FaUserLock,
    FaUsers,
} from "react-icons/fa6";

const data = {
    navMain: [
        {
            title: "Serververwaltung",
            url: "#",
            icon: FaServer,
            items: [
                {
                    title: "Spielerverwaltung",
                    url: route("core.users.index"),
                    icon: FaUsers,
                },
                {
                    title: "Bestrafungen",
                    url: "#",
                    icon: FaHammer,
                },
                {
                    title: "Settings",
                    url: "#",
                    icon: FaGears,
                },
            ],
        },
        {
            title: "Teamverwaltung",
            url: "#",
            icon: FaUserLock,
            items: [
                {
                    title: "Serverteammitglieder",
                    url: "#",
                },
                {
                    title: "Bewerbungen",
                    url: "#",
                },
            ],
        },
        {
            title: "Dokumentation",
            url: "#",
            icon: FaBookSkull,
            items: [
                {
                    title: "Willkommen",
                    url: "#",
                },
                {
                    title: "Allgemeine Informationen",
                    url: "#",
                },
                {
                    title: "Verhaltensregeln",
                    url: "#",
                },
                {
                    title: "Tickets",
                    url: "#",
                },
                {
                    title: "Informationen für Supporter",
                    url: "#",
                },
                {
                    title: "Informationen für Moderatoren",
                    url: "#",
                },
                {
                    title: "Informationen für Entwickler",
                    url: "#",
                },
                {
                    title: "Informationen für Builder",
                    url: "#",
                },
            ],
        },
        {
            title: "Web",
            url: "#",
            icon: FaGlobe,
            items: [
                {
                    title: "Benutzerverwaltung",
                    url: "#",
                    icon: FaUsers,
                },
                {
                    title: "Einstellungen",
                    url: "#",
                    icon: FaSliders,
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: FaUsers,
        },
        {
            title: "Feedback",
            url: "#",
            icon: FaUsers,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: FaUsers,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: FaUsers,
        },
        {
            name: "Travel",
            url: "#",
            icon: FaMap,
        },
    ],
};

export function AppSidebar({ user }: { user: User }) {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="xl" asChild>
                            <Link
                                href={route("dashboard")}
                                className="flex flex-row"
                            >
                                <div className="size-12">
                                    <img
                                        src={"/images/logo_alt2_croped.png"}
                                        alt="Logo"
                                    />
                                </div>
                                <div className="flex flex-col text-lg">
                                    <div className="truncate font-semibold">
                                        Arty Support
                                    </div>
                                    {/* <div className="truncate text-[0.6rem]">
                                        SLNE Development
                                    </div> */}
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
