"use client";
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import { IProduct } from '@/modules/Cards/Cards-types';
import Cart from '@/components/Cart/Cart';
import MainLayout from '@/components/Layout/MainLayout';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';
import classes from '../../../src/styles/shopping-cart.module.scss';
import { Context } from '@/store/context';
import productsService from "@/modules/Template/api";
import ButtonInCart from "@/components/ui/ButtonInCart/ButtonInCart";
import Link from "next/link";

export default async function IdPage() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const [carts, setCarts] = useState<IProduct[]>([]);
    useEffect(() => {
        getSingleCart();
    }, [search]);

    const getSingleCart = async () => {
        const data = await productsService.getSingleProduct(search);
        // @ts-ignore
        setCarts(() => [data]);
    };

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

