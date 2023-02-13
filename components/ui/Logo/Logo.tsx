import React, { FC } from "react";
import s from "./Logo.module.scss";
import Image from "next/image";

interface LogoProps {
  src: string;
}

export const Logo: FC<LogoProps> = ({ src }) => {
  return (
    <Image
      width={100}
      height={60}
      className={s.logo}
      src={src}
      alt={""}
      priority={true}
    />
  );
};
