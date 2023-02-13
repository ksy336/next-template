"use client";
import React, { FC } from "react";
import s from "./TemplateComponent.module.scss";
import { useTemplateStore } from "@/modules/Template/store";

interface TemplateComponentProps {
  number: number;
}

export const TemplateComponent: FC<TemplateComponentProps> = (props) => {
  //store только в use client
  const { item } = useTemplateStore();
  return (
    <div className={s.templateComponent}>
      <p>{item.title}</p>
      <p>{item.text}</p>
      {`props number : ${props.number}`}
    </div>
  );
};
