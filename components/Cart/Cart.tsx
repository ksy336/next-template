import classes from '@/components/Card/Card.module.scss';
import Image from 'next/image';
import StarRating from '@/components/StarRating/StarRating';
import { IProduct } from '@/components/Cards/Cards-types';

type CartProps = {
  cart: IProduct;
};
export default function Cart({ cart }: CartProps) {
  return (
    <article>
      <div className={classes.image_container}>
        <Image src={`${cart.image}`} alt="it is photo" width="220" height="220" />
      </div>
      <div className={classes.category}>
        <span className={classes.type_product}>{cart.category}</span>
        <div>
          <StarRating rating={cart.rating.rate} />
        </div>
      </div>
      <div className={classes.description}>{cart.description}</div>
      <div className={classes.price}>
        {(cart.price * 70).toFixed(2)} ₽ <span className={classes.price_single}>/шт.</span>
      </div>
      {/*<CountProducts cartItems={cartItems} product={cart} setCartItems={setCartItems} />*/}
    </article>
  );
}
