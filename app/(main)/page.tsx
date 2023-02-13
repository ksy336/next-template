import React from "react";
import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";
import { TemplateComponent } from "@/modules/Template/Components/TemplateComponent/TemplateComponent";

export default async function Page() {
  return (
    <>
      <ThemeSwitch />
      <TemplateComponent number={40} />
    </>
  );
}
