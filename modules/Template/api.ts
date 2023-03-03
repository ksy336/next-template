const BASE_URL = process.env.APP_BASE_URL;

class ProductsService {
    async getAllProducts(): Promise<IProduct[]> {
        const response = await fetch(`${BASE_URL}/products`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            }
            );
        try {
            return await response.json()
        } catch(e) {
            console.warn(e);
            throw new Error();
        }
    }
    async getSingleProduct(id: any): Promise<IProduct> {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }, );
        try {
            return await response.json()
        } catch(e) {
            console.warn(e);
            throw new Error();
        }
    }
}
const productsService = new ProductsService();
export default productsService;
