export type TUTILS = {
    BTNSEND: Element | null;
    INPUTSEND: HTMLElement | null;
    FEEDBACK: Element | null;
    NEWNUMBER: Element | null;
    HINT: NodeListOf<Element>;
    SEGMENT: Element | null;
    RESET: string;
}

export type TAPI = {
    status: number,
    json: () => Promise<any> | {
        value: number
    } 
}

export type TMountSegments = string | number | null
