import Header from "./Header";
import { Outlet } from "react-router-dom";
import FooterComp from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterComp />
    </>
  );
}

export default AppLayout;
