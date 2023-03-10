import { IProduct } from '@/modules/Cards/Cards-types';
import Image from 'next/image';
import StarRating from '@/components/StarRating/StarRating';
import classes from '../../modules/Card/Card.module.scss';

type IFavoritesType = {
  favoriteProduct: IProduct;
};
export default function FavoritesProduct({ favoriteProduct }: IFavoritesType) {
  return (
    <div>
      <div className={classes.image_container}>
        <Image src={`${favoriteProduct?.image}`} alt="it is photo" width="220" height="220" />
      </div>
      <div className={classes.category}>
        <span className={classes.type_product}>{favoriteProduct?.category}</span>
        <div>
          <StarRating rating={favoriteProduct?.rating?.rate} />
        </div>
      </div>
      <div className={classes.description}>{favoriteProduct?.description}</div>
      <div className={classes.price}>
        {(favoriteProduct?.price * 70).toFixed(2)} ₽{' '}
        <span className={classes.price_single}>/шт.</span>
      </div>
    </div>
  );
}
