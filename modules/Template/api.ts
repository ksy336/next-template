import {customNotification} from "@/src/helpers/customNotification";
import {PostReq, Template} from "@/modules/Template/types";

export const postSWRReq = async (url: string, {arg}:PostReq) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(arg)
    })
    if (res.ok) {
        customNotification('success', 'top', 'Регистраия', 'прошла успешно')
    }
    if (!res.ok) {
        const text = await res.json()
        customNotification('info', 'top', 'Внимание', text.error)
    }
}

export const getReq = async (url = 'url'):Promise<Template> => {
    const res = await fetch(url, {
        method: "get",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer`,
        },
    })
    return res.json()
}