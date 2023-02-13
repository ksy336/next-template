import {getProductById} from "@/modules/Products/api";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export default async function Page({params}: Params) {
    const product = await getProductById(params.id)
    return (
        <div>
            {product.id}
        </div>
    )
}
