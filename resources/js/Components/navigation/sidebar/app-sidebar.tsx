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
    FaHammer,
    FaMap,
    FaSpaghettiMonsterFlying,
    FaUsers,
} from "react-icons/fa6";

const data = {
    navMain: [
        {
            title: "Serververwaltung",
            url: "#",
            icon: FaUsers,
            items: [
                {
                    title: "Spielerverwaltung",
                    url: "#",
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
                    icon: FaSpaghettiMonsterFlying,
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: FaUsers,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: FaUsers,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: FaUsers,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
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
