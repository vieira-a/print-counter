import BannerOptions from "../BannerOptions";
import Header from "../Header/";
// import Footer from "../Footer";

import MenuBar from "../Menubar";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <Header />
      <section className="flex mt-3 pr-4">
        <MenuBar />
        <BannerOptions />
      </section>
      <main className="ml-[52px] pt-4 pr-4">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
