import React from "react";
import NavHeader from "./components/Header Comp/NavHeader";
import Footer from "./components/Footer Comp/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <NavHeader />
            <Outlet/>
            <Footer/>
        </>

)
}