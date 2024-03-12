export type TAPI = {
    status: number,
    json: () => object | any | {
        value: number
    } 
}
