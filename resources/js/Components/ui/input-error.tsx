export function InputError({ errorMessage }: { errorMessage?: string }) {
    if (!errorMessage) {
        return null;
    }

    return (
        <p className="text-sm font-medium text-destructive">{errorMessage}</p>
    );
}
