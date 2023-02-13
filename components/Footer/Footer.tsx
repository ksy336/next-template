import React, { FC } from "react";
import s from "./Footer.module.scss";

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return <div className={s.footer}>футер</div>;
};
