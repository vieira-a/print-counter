import BannerOptions from "../BannerOptions";
import Header from "../Header/";
import Dashboard from "../Dashboard";
// import Footer from "../Footer";

import MenuBar from "../Menubar";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <Header />
      <Outlet />
      <section>
        {/* <MenuBar /> */}
        <Dashboard />
        {/* <BannerOptions /> */}
      </section>
      <main className="h-screen bg-bg-main-03"></main>
      {/* <Footer /> */}
    </>
  );
}
