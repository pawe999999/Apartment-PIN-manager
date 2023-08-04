export interface PinResponse {
    listVersion: number,
    pins: Pin[]
}



export interface Pin {
    id: number,
    alias: string
    validFrom: string,
    validTo: string,
    pin: string,
}