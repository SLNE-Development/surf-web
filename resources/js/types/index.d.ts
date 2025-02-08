import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    avatar?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    breadcrumbs: {
        title: string;
        url?: string;
        is_current_page: boolean;
    }[];
    ziggy: Config & { location: string };
};
