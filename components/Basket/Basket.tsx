import React, {FC} from 'react';
import s from './Basket.module.scss';
import {IconBasket} from "@/components/ui/IconBasket";

interface BasketProps {

}

export const Basket: FC<BasketProps> = (props) => {
    return (
        <div className={s.basket}>
            <IconBasket/>
        </div>
    );
};
