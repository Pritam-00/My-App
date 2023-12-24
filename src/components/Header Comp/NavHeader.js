import React from "react";
import icon from "../../resources/android-icon-96x96.png"
import Hamburger from "./Hamburger";

export default function NavHeader ({isOpen, menuClick}) {


    
    return(
        
        <nav className="top-0 left-0 right-0 flex justify-between items-center
                        bg-gradient-to-b absolute from-black to-transparent h-20"> 
            <img className="p-4 h-24 " src={icon} alt="The Trail Makers Logo"></img>
            <ul className={`font-mono uppercase max-md:bg-neutral-950 max-md:text-white 
                                max-md:absolute max-md:h-screen max-md:w-[70vw] max-md:ml-[30vw] max-md:top-0 
                                max-md:z-10 max-md:duration-300 
                                max-md:flex max-md:flex-col max-md:pt-28 max-md:items-end 
                                ${isOpen?'':' translate-x-full duration-500'} 
                                md:mr-24 md:flex md:flex-nowrap
                                `}
                                >
                <li className="pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white">Home</li>
                <li className="pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white">Expeditions</li>
                <li className="pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white">Trekkings</li>
                <li className="pr-4 max-md:pb-4 max-md:text-2xl
                                md:text-lg md:font-semibold md:text-white">Courses</li>
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