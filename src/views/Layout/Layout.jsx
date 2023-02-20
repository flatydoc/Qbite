import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

import { Circle } from "../../components/ui/Circle/Circle";
import { ScrollTo } from "../../components/ui/ScrollTo/ScrollTo";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Circle />
        <ScrollTo />
      </main>
      <Footer />
    </>
  );
};
