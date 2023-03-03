import Router, { useRouter } from 'next/router';
import { useContext } from 'react';
import { IProduct } from '@/modules/Cards/Cards-types';
import Cart from '@/components/Cart/Cart';
import MainLayout from '@/components/Layout/MainLayout';
import Head from 'next/head';
import ButtonInCart from '@/components/ButtonInCart/ButtonInCart';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';
import classes from '@/styles/shopping-cart.module.scss';
import { Context } from '@/store/context';
import productsService from "@/modules/Template/api";

export default async function IdPage() {
    const router = useRouter();
    const id = router.query.id;
    const carts = await productsService.getSingleProduct(id);
    // @ts-ignore
    const { cartItems } = useContext(Context);

    const goLinkHome = () => {
        Router.push('/products');
    };
    return (
        <div className={classes.wrapper}>
            <MainLayout>
                <Head>
                    <title>Online store</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/online-store.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <h1>Detail Cart</h1>
                <ButtonInCart onClick={goLinkHome}>Back home</ButtonInCart>
                {carts?.map((cart: IProduct) => (
                    <Cart key={cart.id} cart={cart} />
                ))}
            </MainLayout>
            {cartItems?.length > 0 ? <Footer /> : <FooterBottom />}
        </div>
    );
}

