"use client";

import {useTheme} from "next-themes";
import {Toaster as Sonner} from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({...props}: ToasterProps) => {
    const {theme = "system"} = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            closeButton
            toastOptions={{
                classNames: {
                    toast: "group toast border-t-2 rounded-none rounded-b",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                    success: "border-t-success",
                    error: "border-t-danger",
                    loading: "border-t-primary",
                    info: "border-t-info",
                    warning: "border-t-warning",
                },
            }}
            {...props}
        />
    );
};

export {Toaster};
