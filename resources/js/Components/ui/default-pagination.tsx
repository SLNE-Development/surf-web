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
import { PaginatedModel } from "@/types";

export function DefaultPagination<T>({ model }: { model: PaginatedModel<T> }) {
    const paginationLinksWithoutFirstAndLast = model.meta.links.slice(
        1,
        model.meta.links.length - 1
    );

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationFirst href={model.links.first ?? undefined} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationPrevious href={model.links.prev ?? undefined} />
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
                    <PaginationNext href={model.links.next ?? undefined} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLast href={model.links.last ?? undefined} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
