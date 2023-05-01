import BannerOptions from "../BannerOptions";
import Header from "../Header/";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <Header />
      <BannerOptions />
      <Outlet />
    </>
  );
}
