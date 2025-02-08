import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const logoVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
        size: {
            xs: "size-8",
            sm: "size-12",
            md: "size-16",
            default: "size-20",
            lg: "size-24",
            xl: "size-32",
            "2xl": "size-40",
            "3xl": "size-48",
            "4xl": "size-56",
            "5xl": "size-64",
            "6xl": "size-72",
            "7xl": "size-80",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

interface ApplicationLogoProps extends VariantProps<typeof logoVariants> {
    className?: string;
}

export function ApplicationLogo({
    variant,
    size,
    className,
}: ApplicationLogoProps) {
    return (
        <div className={cn(logoVariants({ variant, size, className }))}>
            <img src="/images/logo_alt2_croped.png" alt="Logo" />
        </div>
    );
}
