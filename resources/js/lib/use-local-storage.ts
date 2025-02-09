import { useEffect, useState } from "react";

export function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    toStringFunction: (value: T) => string,
    fromStringFunction: (value: string) => T
) {
    const [state, setState] = useState<T>(() => {
        const value = localStorage.getItem(key);
        return value ? fromStringFunction(value) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, toStringFunction(state));
    }, [key, state, toStringFunction]);

    return [state, setState] as const;
}

export function useBooleanLocalStorage(key: string, defaultValue = false) {
    return useLocalStorage(
        key,
        defaultValue,
        String,
        (value) => value === "true"
    );
}
