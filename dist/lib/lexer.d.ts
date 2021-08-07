interface Token {
    readonly value: string;
    readonly isAscii: boolean;
}
export declare function tokenize(str: string): Token[];
export {};
