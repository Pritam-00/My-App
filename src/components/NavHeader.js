import React from "react";
import icon from "../resources/favicon-32x32.png"

export default function NavHeader () {

    return (
        <div className="bg-black flex justify-around items-center h-12"> 
            <div> 
                <img src={icon} alt="The Trail makets" 
                className="inline-block"></img>
                
            </div>
            <nav className="flex items-center "> 
                <button className="text-white mx-2">All Treks</button>
                <button className=" bg-white rounded-xl mx-2 px-2 font-semibold">Home</button>
                <button className="text-white mx-2">Homestay</button>
            </nav>
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