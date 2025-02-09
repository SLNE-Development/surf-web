import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    avatar?: string;
}

export interface CoreUser {
    id: number;
    uuid: string;
    last_name?: string;
    last_server?: string;
    last_seen?: string;
    created_at: string;
    updated_at: string;
}

export interface PaginatedModel<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        last_page: number;
        path: string;
        per_page: number;
        from: number;
        to: number;
        total: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
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
