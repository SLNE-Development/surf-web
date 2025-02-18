import {
    Pagination,
    PaginationContent,
    PaginationFirst,
    PaginationItem,
    PaginationLast,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginatedModel } from "@/types/helper-types";

export function DefaultPagination<T>({ model }: { model: PaginatedModel<T> }) {
    const paginationLinksWithoutFirstAndLast = model.links.slice(
        1,
        model.links.length - 1
    );

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationFirst href={model.first_page_url ?? undefined} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationPrevious
                        href={model.prev_page_url ?? undefined}
                    />
                </PaginationItem>
                {paginationLinksWithoutFirstAndLast.map((link) => (
                    <PaginationItem key={link.url}>
                        <PaginationLink
                            isActive={link.active}
                            href={link.url ?? undefined}
                        >
                            {link.label}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext href={model.next_page_url ?? undefined} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLast href={model.last_page_url ?? undefined} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
