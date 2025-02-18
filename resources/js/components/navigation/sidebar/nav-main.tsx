"use client";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useBooleanLocalStorage } from "@/lib/use-local-storage";
import { FaCaretRight } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon: IconType;
        items?: {
            title: string;
            url: string;
            icon?: IconType;
            active?: boolean;
        }[];
    }[];
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const [isOpen, setOpen] = useBooleanLocalStorage(
                        `nav-main-${item.title}`,
                        false
                    );

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            onOpenChange={setOpen}
                            defaultOpen={isOpen}
                        >
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip={item.title}>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                                                <FaCaretRight />
                                                <span className="sr-only">
                                                    Toggle
                                                </span>
                                            </SidebarMenuAction>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={
                                                                subItem.active
                                                            }
                                                        >
                                                            <a
                                                                href={
                                                                    subItem.url
                                                                }
                                                            >
                                                                <span className="inline-flex items-center gap-1">
                                                                    {subItem.icon && (
                                                                        <subItem.icon />
                                                                    )}
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </>
                                ) : null}
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
