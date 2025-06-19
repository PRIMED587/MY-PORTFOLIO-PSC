import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HomeFooter } from "../components/Homefooter"; // Asegúrate de que esta ruta sea correcta

export const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
      {isHome ? <HomeFooter /> : <Footer />}
    </ScrollToTop>
  );
};
