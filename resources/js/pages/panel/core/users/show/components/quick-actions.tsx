import {CoreUserData} from "@/types";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FaAddressCard, FaBoltLightning, FaIdBadge, FaSpinner} from "react-icons/fa6";
import * as React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {IconType} from "react-icons";
import {cn} from "@/lib/utils";
import {toast} from "sonner";
import {
    CoreUserShowQuickActionKick
} from "@/pages/panel/core/users/show/components/quick-actions/kick-quick-action";
import {
    CoreUserShowQuickActionDisconnect
} from "@/pages/panel/core/users/show/components/quick-actions/disconnect-quick-action";
import {
    CoreUserShowQuickActionBan
} from "@/pages/panel/core/users/show/components/quick-actions/ban-quick-action";

export function CoreUserShowQuickActions({user}: { user: CoreUserData }) {
    return <div
        className={"fixed bottom-4 right-4 z-10 flex gap-2 group flex-col-reverse items-center"}>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={"rounded-full z-[10]"}>
                    <div
                        className={"bg-primary cursor-pointer rounded-full size-14 flex flex-row items-center justify-center shadow"}>
                        <span className={"text-primary-foreground"}><FaBoltLightning/></span>
                    </div>
                </TooltipTrigger>
                <TooltipContent side={"left"}>
                    Schnellaktionen
                </TooltipContent>
            </Tooltip>

            <div
                className={"max-h-0 group-hover:max-h-full overflow-hidden flex flex-col-reverse gap-2"}>
                <CoreUserShowQuickActionBan user={user}/>
                <CoreUserShowQuickActionKick user={user}/>
                <CoreUserShowQuickActionDisconnect user={user}/>

                <CoreUserShowQuickActionsMenuItem
                    tooltip={"UUID Kopieren"}
                    icon={FaIdBadge}
                    action={() => {
                        toast.promise(window.navigator.clipboard.writeText(user.uuid), {
                            success: "UUID kopiert",
                            error: "Fehler beim Kopieren der UUID",
                            loading: <FaSpinner/>
                        })
                    }}/>

                {user.last_name && (
                    <CoreUserShowQuickActionsMenuItem
                        tooltip={"Benutzername Kopieren"}
                        icon={FaAddressCard}
                        action={() => {
                            toast.promise(window.navigator.clipboard.writeText(user.last_name!!), {
                                success: "Benutzername kopiert",
                                error: "Fehler beim Kopieren des Benutzernamen",
                                loading: <FaSpinner/>
                            })
                        }}/>
                )}
            </div>
        </TooltipProvider>
    </div>
}

const quickActionMenuItemVariants = cva("size-12 rounded-full flex flex-row items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 top-16 group-hover:top-0 transition-all relative z-[9] shadow", {
        variants: {
            variant: {
                default: "bg-neutral-400 dark:bg-neutral-600",
                danger: "bg-danger text-danger-foreground",
                warning: "bg-warning text-warning-foreground",
                success: "bg-success text-success-foreground",
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

interface QuickActionsMenuItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof quickActionMenuItemVariants> {
    tooltip: string;
    icon: IconType;
    action?: () => void;
}

export function CoreUserShowQuickActionsMenuItem({
                                                     tooltip,
                                                     icon: Icon,
                                                     variant,
                                                     action
                                                 }: QuickActionsMenuItemProps) {
    return <Tooltip>
        <TooltipTrigger className={"rounded-full"} asChild>
            <div
                onClick={() => action ? action() : null}
                className={cn(quickActionMenuItemVariants({variant}))}>
                <span><Icon/></span>
            </div>
        </TooltipTrigger>
        <TooltipContent side={"left"}>
            {tooltip}
        </TooltipContent>
    </Tooltip>
}
