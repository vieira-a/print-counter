import BannerOptions from "../BannerOptions";
import Header from "../Header/";
import MenuBar from "../Menubar";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <Header />
      <MenuBar />
      <BannerOptions />
      <Outlet />
    </>
  );
}
