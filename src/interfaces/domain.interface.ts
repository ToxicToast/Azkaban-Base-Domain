export interface Domain<Anemic> {
    toAnemic(): Anemic;
    isUpdated(): boolean;
    isDeleted(): boolean;
    delete(): void;
    restore(): void;
}
