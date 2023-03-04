"use client";
import classes from "@/src/styles/shopping-cart.module.scss";
import ButtonInCart from "@/components/ui/ButtonInCart/ButtonInCart";
import {useRouter} from 'next/navigation';

export default function BackHome() {
    const router = useRouter();
    const goLinkHome = () => {
        router.push('/');
    };
    return(
        <article className={classes.block_text}>
            <h1>Корзина</h1>
            <ButtonInCart onClick={goLinkHome}>Back home</ButtonInCart>
        </article>
    )
}
