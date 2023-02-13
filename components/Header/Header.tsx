import React, { FC } from "react";
import s from "./Header.module.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  return <div className={s.header}>хедер</div>;
};
