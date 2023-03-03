import Image from 'next/image';
import image from '../../public/favourites.svg';
import redImage from '../../public/heart2.svg';
import { useContext, useEffect, useState } from 'react';
import styles from './FavoritesSign.module.scss';
import { IProduct } from '@/components/Cards/Cards-types';
import openNotification from '@/helper/notification';
import { Context } from '@/store/context';

type InitialPropsForSign = {
  product: IProduct;
};
export default function FavoritesSign({
  product,
}: InitialPropsForSign) {
  // @ts-ignore
  const {  numberOfFavorites, setNumberOfFavourites, redHeart, setRedHeart, favoriteProducts, setFavoriteProducts } =
    useContext(Context);

  useEffect(() => {
    setRedHeart(redHeart);
  });
  const addToFavorites = () => {
    setRedHeart((prev: any) => [...prev, product.id]);
    setNumberOfFavourites(numberOfFavorites + 1);
    setFavoriteProducts((prev: any) => [...prev, product]);
    try {
      openNotification('success', 'Товар добавлен в избранное!');
    } catch (e) {
      openNotification('error', 'Произошла ошибка! Попробуйте снова');
    }
  };
  const removeFromFavorites = () => {
    if (numberOfFavorites < 0) {
      return;
    }
    setNumberOfFavourites(numberOfFavorites - 1);
    setRedHeart((prev: any) => {
      return [...prev].filter((item) => item !== product.id);
    });
    setFavoriteProducts((prev: any) => [...prev].filter((item) => item.id !== product.id));
    try {
      openNotification('success', 'Товар удален из избранного!');
    } catch (e) {
      openNotification('error', 'Произошла ошибка! Попробуйте снова');
    }
  };
  return (
    <>
      {!redHeart?.includes(product.id) && (
        <Image
          src={image}
          alt="it is photo"
          width="40"
          height="40"
          onClick={addToFavorites}
          className={styles.heart_image}
        />
      )}
      {redHeart?.includes(product.id) && (
        <Image
          src={redImage}
          alt="it is photo"
          width="40"
          height="40"
          className={styles.heart_image}
          onClick={removeFromFavorites}
        />
      )}
    </>
  );
}
