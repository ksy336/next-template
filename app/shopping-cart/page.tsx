"use client";
import React, { useContext, useMemo } from 'react';
import classes from '../../src/styles/shopping-cart.module.scss';
import { IProduct } from '@/modules/Cards/Cards-types';
import SingleCart from '@/components/SingleCart/SingleCart';
import MainLayout from '@/components/Layout/MainLayout';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';
import { Context } from '@/store/context';
import BackHome from "@/components/BackHome/BackHome";

export default function ShoppingCartPage() {
  // @ts-ignore
  const { cartItems } = useContext(Context);
  const totalPrice = useMemo(
    () => cartItems.reduce((prev: any, curr: any) => prev + +curr.totalPrice * 70, 0),
    [cartItems]
  );

  return (
    <div className={classes.wrapper}>
      <MainLayout>
       <BackHome />
        {cartItems?.length === 0 ? (
          <h1 className={classes.no_items}>Корзина пуста</h1>
        ) : (
          <div className={classes.carts_container}>
            {cartItems?.map((cart: IProduct) => (
              <SingleCart cart={cart} key={cart.id} />
            ))}
          </div>
        )}
        {cartItems?.length > 0 && (
          <div className={classes.button_block}>
            <div className={classes.button_container}>
              <div className={classes.button_text}>
                <span>ИТОГО</span>
                <span>{totalPrice.toFixed(2)} ₽</span>
              </div>
            </div>
          </div>
        )}
      </MainLayout>
        {cartItems?.length > 0 ? <Footer /> : <FooterBottom />}
    </div>
  );
}
