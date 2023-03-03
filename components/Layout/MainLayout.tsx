import { ReactNode } from "react";
import classes from './MainLayout.module.scss';
import { Header } from "@/components/Header/Header";

interface Props {
  children?: ReactNode;
}
export default function MainLayout({ children }: Props) {

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
