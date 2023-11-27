import React from "react";
import icon from "../../resources/android-chrome-192x192.png"

export default function NavHeader () {

    return (
        <div className= ""> 
            <nav className="flex overflow-x-auto bg-white h-8 no-scrollbar"> 
                <button className=" mx-2 flex-shrink-0">All Treks</button>
                <button className="bg-black text-white flex-shrink-0 mx-2 px-2 font-semibold">Home</button>
                <button className=" mx-2 flex-shrink-0">Homestay</button>
                <button className=" mx-2 flex-shrink-0">Expert Advice</button>
                <button className=" mx-2 flex-shrink-0">Contact Us</button>
                <button className=" mx-2 flex-shrink-0">Contact Us</button>
                <button className=" mx-2 flex-shrink-0">Contact Us</button>
                <button className=" mx-2 flex-shrink-0">Contact Us</button>
                <button className=" mx-2 flex-shrink-0">Contact Us</button>
            </nav>

            <div className="bg-black h-20 "> 
                <img src={icon} alt="The Trail makets" 
                className="inline-block p-2 pl-4 h-16"></img>
                
            </div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}