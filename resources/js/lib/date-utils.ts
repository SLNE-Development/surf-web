/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { format } from "date-fns";
import { de } from "date-fns/locale";

export function formatDate(date?: Date | null, includeWeekday = true) {
    if (date === null || date === undefined) {
        return "/";
    }

    return format(date, `${includeWeekday ? "EEEE, " : ""}dd. MMMM yyyy`, {
        locale: de,
    });
}

export function formatDateTime(date?: Date | null, includeWeekday = true) {
    if (date === null || date === undefined) {
        return "/";
    }

    return format(
        date,
        `${includeWeekday ? "EEEE, " : ""}dd. MMMM yyyy, HH:mm`,
        {
            locale: de,
        }
    );
}
