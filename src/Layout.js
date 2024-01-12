import React from "react";
import NavHeader from "./components/Header Comp/NavHeader";
import Footer from "./components/Footer Comp/Footer";

import { Outlet } from "react-router-dom";
import useStore from "./Store/store";

export default function Layout() {

    const {hamburgerOpen, toggleHamburger} = useStore((state) => {
        return {hamburgerOpen: state.hamburgerOpen, toggleHamburger: state.toggleHamburger}
      })

    return (
        <div  className={`${hamburgerOpen ? 'h-screen overflow-hidden' : 'overflow-auto'}`}>
            <NavHeader />
            <Outlet/>
            <Footer/>
        </div>

)
}