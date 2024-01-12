import React from "react";
import icon from "../../resources/android-icon-96x96.png"
import Hamburger from "./Hamburger";

import { NavLink } from "react-router-dom";
import useStore from "../../Store/store";
export default function NavHeader () {

    const {hamburgerOpen, toggleHamburger} = useStore((state) => {
        return {hamburgerOpen: state.hamburgerOpen, toggleHamburger:state.toggleHamburger}
      })
    return(
        
        <nav className="top-0 left-0 right-0 flex justify-between items-center
                        bg-gradient-to-b absolute from-black to-transparent h-20"> 
            <img className="p-4 h-24 " src={icon} alt="The Trail Makers Logo"></img>
            <ul className={`font-mono uppercase max-md:bg-neutral-950 max-md:text-white 
                                max-md:absolute max-md:h-screen max-md:w-[70vw] max-md:ml-[30vw] max-md:top-0 
                                max-md:z-10 max-md:duration-300 
                                max-md:flex max-md:flex-col max-md:pt-28 max-md:items-end 
                                ${hamburgerOpen?'visible ':'max-md:hidden max-md:translate-x-full max-md:duration-500'} 
                                md:mr-24 md:flex md:flex-nowrap
                                `}

                                
                                >
<li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>Home</NavLink> 
                </li>

<li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/Expeditions" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>Expeditions</NavLink> 
                </li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/Trekkings" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>Trekkings</NavLink> 
                </li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/Courses" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>Courses</NavLink> 
                </li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/Mountain-Lessons" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>Mountain Lessons</NavLink> 
                </li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/FAQs" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>FAQs</NavLink> 
                </li>

<li className="pr-4 max-md:pb-4 max-md:text-2xl md:text-lg md:font-semibold">
                    <NavLink to= "/Enquire" 
                        className = {({isActive}) => `${isActive ? "text-sky-500" : "text-white"}`}>Enquire</NavLink> 
                </li>

                <li><NavLink to="/" className="max-md:mt-20 max-md:mx-4
                                max-md:border-t-[1px] max-md:border-slate-500 ">
                                    Instagram</NavLink></li>
            </ul>
            
            <div className="z-20" onClick={toggleHamburger}>
                <Hamburger/>
            </div>
        </nav>
    )
}