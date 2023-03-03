import Router from 'next/router';
import MainLayout from '@/components/Layout/MainLayout';
import { IProduct } from '@/modules/Cards/Cards-types';
import FavoritesProduct from '@/components/FavoritesProducts/FavoritesProduct';
import classes from '@/styles/shopping-cart.module.scss';
import Footer from '@/components/Footer/Footer';
import FooterBottom from '@/components/FooterBottom/FooterBottom';
import { useContext } from 'react';
import { Context } from '@/store/context';
import ButtonInCart from "@/components/ui/ButtonInCart/ButtonInCart";

export default function FavouritesPage() {
  // @ts-ignore
  const { cartItems, favoriteProducts }: IProduct[] = useContext(Context);
  const goLinkHome = () => {
    Router.push('/products');
  };
  return (
    <div className={classes.wrapper}>
      <MainLayout>
        <h1>Favorites</h1>
        <ButtonInCart onClick={goLinkHome}>Back home</ButtonInCart>
        {favoriteProducts?.length === 0 ? (
          <h1 className={classes.no_items}> Нет товаров в избранном</h1>
        ) : (
          <div className={classes.carts_container}>
            {favoriteProducts?.map((item: IProduct) => (
              <FavoritesProduct key={item.id} favoriteProduct={item} />
            ))}
          </div>
        )}
      </MainLayout>
      {cartItems?.length > 0 ? <Footer /> : <FooterBottom />}
    </div>
  );
}
