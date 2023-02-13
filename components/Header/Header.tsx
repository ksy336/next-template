import React, { FC } from "react";
import s from "./Header.module.scss";
import { Logo } from "@/components/ui/Logo/Logo";
import Link from "next/link";
import { Search } from "@/components/Search/Search";
import { Basket } from "@/components/Basket/Basket";
import { UserBtn } from "@/modules/User/component/UserBtn/UserBtn";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={s.header}>
      <div className={s.block}>
        <div className={s.item}>
          <Logo src="/logo.svg" />
          <nav className={s.nav}>
            <Link className={s.link} href="/">
              Главная
            </Link>
            <Link className={s.link} href="/catalog">
              Каталог
            </Link>
            <Link className={s.link} href="/advice">
              Советы и гайды
            </Link>
            <Link className={s.link} href="/cooperation">
              Сотрудничество
            </Link>
          </nav>
        </div>
        <div className={s.flex}>
          <Search />
          <Basket />
          <UserBtn />
        </div>
      </div>
    </header>
  );
};
