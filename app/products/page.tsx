import MainLayout from '@/components/Layout/MainLayout';
import {productsService} from '@/modules/Template/api';
import Cards from '@/components/Cards/Cards';
import classes from '../../styles/Home.module.scss';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';

export default async function Page() {
    const data = await productsService.getAllProducts();
    const { products } = data?.map((item) => {
        return {
            ...item,
            count: 1,
            totalPrice: Number(item.price),
            };
    });

    return (
        <div className={classes.wrapper}>
            <MainLayout>
                {!products && <p>Loading...</p>}
                <Cards products={products} />
            </MainLayout>
            {products?.length > 0 ? <Footer /> : <FooterBottom />}
        </div>
    );
}

