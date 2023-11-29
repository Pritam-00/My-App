import React, { useState } from "react";
import icon from "../../resources/android-icon-96x96.png"
import Hamburger from "./Hamburger";

export default function NavHeader () {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    function toggleHamburger() {
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        
        <nav className="top-0 left-0 right-0 flex justify-between items-center
                        bg-gradient-to-b absolute from-black to-transparent h-20"> 
            <img className="p-4 h-24" src={icon} alt="The Trail Makers Logo"></img>
            <ul className={` max-md:bg-slate-500 max-md:h-screen max-md:w-[90vw] max-md:top-0 max-md:absolute max-md:ml-[10vw] max-md:z-10 max-md:duration-300 max-md:rounded-tl-[4rem] max-md:rounded-bl-[30rem]
                                max-md:flex max-md:flex-col max-md:justify-center max-md:items-center
                                ${hamburgerOpen?'':'translate-x-full duration-500'}s
                                md:mr-24 md:flex md:flex-nowrap
                                `}
                                >
                <li className="pr-4 max-md:pb-10 max-md:text-5xl
                                md:text-lg md:font-semibold md:text-white">Home</li>
                <li className="pr-4 max-md:pb-10 max-md:text-5xl
                                md:text-lg md:font-semibold md:text-white">About</li>
                <li className="pr-4 max-md:pb-10 max-md:mb-20 max-md:text-5xl
                                md:text-lg md:font-semibold md:text-white">Contact US</li>
            </ul>
            <div className="z-20" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
        </nav>
    )
}