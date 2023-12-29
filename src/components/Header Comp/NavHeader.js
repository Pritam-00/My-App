import React from "react";
import icon from "../../resources/android-icon-96x96.png"
import Hamburger from "./Hamburger";

import { NavLink } from "react-router-dom";
export default function NavHeader ({isOpen, menuClick}) {


    
    return(
        
        <nav className="top-0 left-0 right-0 flex justify-between items-center
                        bg-gradient-to-b absolute from-black to-transparent h-20"> 
            <img className="p-4 h-24 " src={icon} alt="The Trail Makers Logo"></img>
            <ul className={`font-mono uppercase max-md:bg-neutral-950 max-md:text-white 
                                max-md:absolute max-md:h-screen max-md:w-[70vw] max-md:ml-[30vw] max-md:top-0 
                                max-md:z-10 max-md:duration-300 
                                max-md:flex max-md:flex-col max-md:pt-28 max-md:items-end 
                                ${isOpen?'visible ':'max-md:hidden max-md:translate-x-full max-md:duration-500'} 
                                md:mr-24 md:flex md:flex-nowrap
                                `}
                                >
                <li><NavLink to= "/" className = {({isActive}) => `pr-4 max-md:pb-4 max-md:text-2xl 
                                                            ${isActive ? "text-sky-500" : "text-white"}
                                md:text-lg md:font-semibold`} end>Home</NavLink> </li>

                <li><NavLink to= "/Expeditions" className = {({isActive}) => `pr-4 max-md:pb-4 max-md:text-2xl 
                                                            ${isActive ? "text-sky-500" : "text-white"}
                                md:text-lg md:font-semibold`} >Expeditions</NavLink> </li>

                <li><NavLink to= "/Trekkings" className = {({isActive}) => `pr-4 max-md:pb-4 max-md:text-2xl 
                                                            ${isActive ? "text-sky-500" : "text-white"}
                                md:text-lg md:font-semibold`}>Trekkings</NavLink> </li>

                <li className={`pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white`}>Courses</li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white">Mountain Lessons</li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white">FAQs</li>

                <li className="pr-4 max-md:pb-4 max-md:text-2xl 
                                md:text-lg md:font-semibold md:text-white">Enquire</li>

                <li className="max-md:mt-20 max-md:mx-4
                                max-md:border-t-[1px] max-md:border-slate-500 ">
                                    Instagram</li>
            </ul>
            
            <div className="z-20" onClick={menuClick}>
                <Hamburger isOpen={isOpen}/>
            </div>
        </nav>
    )
}