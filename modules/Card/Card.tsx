"use client";
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IProduct } from '@/modules/Cards/Cards-types';
import StarRating from '@/components/StarRating/StarRating';
import FavoritesSign from '@/components/FavoritesSign/FavoritesSign';
import classes from './Card.module.scss';
import CountProducts from '@/components/CountProducts/CountProducts';
import hit from '../../public/hit.png';
import { Context } from '@/store/context';
import openNotification from "@/src/helpers/notification";
import ButtonToCart from "@/components/ui/ButtonToCart/ButtonToCart";
import ButtonInCart from "@/components/ui/ButtonInCart/ButtonInCart";

type InitialPropsForProduct = {
  product: IProduct;
};
export default function Card({
  product
}: InitialPropsForProduct) {
  // @ts-ignore
  const { addToCart, setCartItemsIds, cartItemsIds } = useContext(Context);
  const router = useRouter();
  const size = 100;
  const addToCartHandler = () => {
    setCartItemsIds((prev: any) => {
      return [...prev, product.id];
    });
    addToCart(product);
    try {
      openNotification('success', 'Товар добавлен в корзину!');
    } catch (e) {
      openNotification('error', 'Произошла ошибка! Попробуйте снова');
    }
  };
  const goToShoppingCart = () => {
      router.push('/shopping-cart');
  };
  // const goToSinglePage = () => {
  //     router.push(`products/${product.id}`);
  // };

  return (
    <article>
      <div>
        {product.rating.count > 300 && (
          <div className={classes.hit}>
            <Image src={hit} alt="it is photo" width="64" height="24" />
          </div>
        )}
        <div className={classes.image_container}>
          <Image src={`${product.image}`} alt="it is photo" width="220" height="220" />
        </div>
      </div>
      <div className={classes.category}>
        <span className={classes.type_product}>{product.category}</span>
        <div>
          <StarRating rating={product.rating.rate} />
        </div>
      </div>
      {product.description.length > size ? (
        <div className={classes.description}>{product.description.slice(0, size) + '...'}</div>
      ) : (
        <div className={classes.description}>{product.description}</div>
      )}
      <div className={classes.price}>
        {(product.price * 70).toFixed(2)} ₽ <span className={classes.price_single}>/шт.</span>
      </div>
      <div className={classes.buttons}>
        {!cartItemsIds?.includes(product.id) ? (
          <ButtonToCart onClick={addToCartHandler} type="button">
            В корзину
          </ButtonToCart>
        ) : (
          <>
            <ButtonInCart onClick={goToShoppingCart} type="button">
              В корзине
            </ButtonInCart>
            <CountProducts product={product} />
          </>
        )}
        <FavoritesSign
          product={product}
        />
      </div>
    </article>
  );
}
