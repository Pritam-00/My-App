import React, { useState } from "react";
import icon from "../../resources/The Trail Makers Logo x128.png"
import Hamburger from "./Hamburger";

export default function NavHeader () {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    function toggleHamburger() {
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        
        <nav className="top-0 left-0 right-0 flex justify-between items-center
                        bg-gradient-to-b absolute from-black to-transparent h-20"> 
            <img className="p-4 h-20" src={icon} alt="The Trail Makers Logo"></img>
            <ul className={` max-md:bg-slate-500 max-md:h-screen max-md:w-[90vw] max-md:top-0 max-md:absolute max-md:ml-[10vw] max-md:z-10 max-md:duration-300 max-md:rounded-tl-[4rem] max-md:rounded-bl-[30rem]
                                max-md:flex max-md:flex-col max-md:justify-center max-md:items-center
                                ${hamburgerOpen?'':'translate-x-full duration-500'}s
                                md:mr-4 md:flex md:flex-nowrap
                                `}
                                >
                <li className="pr-4 pb-10 text-5xl">Home</li>
                <li className="pr-4 pb-10 text-5xl">About</li>
                <li className="pr-4 pb-10 mb-40 text-5xl">Contact US</li>
            </ul>
            <div className="z-20" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
        </nav>
    )
}