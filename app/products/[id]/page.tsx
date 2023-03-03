import { useRouter } from 'next/router';
import { useContext } from 'react';
import { IProduct } from '@/modules/Cards/Cards-types';
import Cart from '@/components/Cart/Cart';
import MainLayout from '@/components/Layout/MainLayout';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';
import classes from '@/styles/shopping-cart.module.scss';
import { Context } from '@/store/context';
import productsService from "@/modules/Template/api";
import ButtonInCart from "@/components/ui/ButtonInCart/ButtonInCart";
import Link from "next/link";

export default async function IdPage() {
    const router = useRouter();
    const id = router.query.id;
    const carts = await productsService.getSingleProduct(id);
    // @ts-ignore
    const { cartItems } = useContext(Context);

    return (
        <div className={classes.wrapper}>
            <MainLayout>
                <h1>Detail Cart</h1>
                <Link href="/products">
                    <ButtonInCart>Back home</ButtonInCart>
                </Link>
                {carts?.map((cart: IProduct) => (
                    <Cart key={cart.id} cart={cart} />
                ))}
            </MainLayout>
            {cartItems?.length > 0 ? <Footer /> : <FooterBottom />}
        </div>
    );
}

