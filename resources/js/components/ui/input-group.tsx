import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function InputGroup({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    );
}
