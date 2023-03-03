"use client";
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/Layout/MainLayout';
import { IProduct } from '@/modules/Cards/Cards-types';
import classes from '../../src/styles/shopping-cart.module.scss';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';
import { Context } from '@/store/context';
import ButtonInCart from "@/components/ui/ButtonInCart/ButtonInCart";
import FavoritesProduct from "@/components/FavoritesProducts/FavoritesProduct";

export default function FavouritesPage() {
  // @ts-ignore
  const { cartItems, favoriteProducts } = useContext(Context);
  console.log(favoriteProducts)
  const router = useRouter();
  const goLinkHome = () => {
    router.push('/products');
  };
  return (
    <div className={classes.wrapper}>
      <MainLayout>
        <h1>Favorites</h1>
        <ButtonInCart onClick={goLinkHome}>Back home</ButtonInCart>
          <div className={classes.carts_container}>
            {favoriteProducts?.map((item: IProduct, i: number) => (
              <FavoritesProduct
                  key={i}
                  favoriteProduct={item}
              />
            ))}
          </div>
      </MainLayout>
      {cartItems?.length > 0 ? <Footer /> : <FooterBottom />}
    </div>
  );
}
