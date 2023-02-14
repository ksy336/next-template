import React from "react";
import { ThemeSwitch } from "@/modules/Theme/components/ThemeSwitch/ThemeSwitch";
import { TemplateComponent } from "@/modules/Template/Components/TemplateComponent/TemplateComponent";
import { Title } from "@/components/ui/Title/Title";
import { IconBasket } from "@/components/ui/IconBasket";

export default async function Page() {
  return (
    <>
      <ThemeSwitch />
      <Title>1</Title>
      <TemplateComponent number={40} />
      <IconBasket />
    </>
  );
}
