import React, { FC, useContext, useEffect, useState } from "react";
import Router from 'next/router';
import { Context } from '@/store/context';
import Image from 'next/image';
import heart from '../../public/heart.svg';
import cart from '../../public/cart.svg';
import classes from "./Header.module.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    // @ts-ignore
    const { cartItems, numberOfFavorites, setNumberOfFavourites } = useContext(Context);
    const [numberOfItems, setNumberOfItems] = useState(0);
    useEffect(() => {
        setNumberOfItems(cartItems?.length);
        setNumberOfFavourites(numberOfFavorites);
    }, [cartItems]);

    const handleClick = () => {
        Router.push('/');
    };
    const goToCartPage = () => {
        Router.push('/shopping-cart');
    };
    const goToFavourites = () => {
        Router.push('/favorites');
    };
    return (
      <header className={classes.header_header_first}>
          <div className={classes.header_wrapper}>
              <div className={classes.header_logo} onClick={handleClick}>
                  <span>ONLINE STORE</span>
              </div>
              <nav className={classes.nav}>
                  <div className={classes.heart_block} onClick={goToFavourites}>
              <span>
                <Image src={heart} alt="it is heart icon" width="23" height="20" />
              </span>
                      <span className={classes.heart_container}>
                <span className={classes.heart_number}>{numberOfFavorites}</span>
              </span>
                  </div>
                  <div className={classes.cart_block} onClick={goToCartPage}>
              <span>
                <Image src={cart} alt="it is shopping cart icon" width="24" height="25" />
              </span>
                      <span className={classes.cart_container}>
                <span className={classes.cart_number}>{numberOfItems}</span>
              </span>
                  </div>
              </nav>
          </div>
      </header>
  )
};
