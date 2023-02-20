import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

import ScrollToTop from "react-scroll-to-top";
import { ScrollArrow } from "../../components/ui/Arrows/ScrollArrow";
import { Circle } from "../../components/ui/Circle/Circle";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Circle />
        <ScrollToTop
          smooth
          component={<ScrollArrow />}
          style={{
            borderRadius: "50%",
            border: "1px solid #fff",
            backgroundColor: "transparent",
          }}
        />
      </main>
      <Footer />
    </>
  );
};
