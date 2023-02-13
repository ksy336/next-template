export interface Template {
    title?:string
}
export interface PostReq {
    arg: {
        title:string
        text:string
    }
}