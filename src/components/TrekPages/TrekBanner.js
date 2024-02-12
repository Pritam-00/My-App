import React from "react";
import NavHeader from "../Header Comp/NavHeader";;

export default function TrekBanner ({trekImg}) {
    return (
    <div className="relative ">

        <NavHeader/>

        <div className=" h-[80vh] bg-cover bg-center p-8 pt-40
                         flex flex-col justify-start
                         items-center" style={{backgroundImage: `url(${trekImg})`}}> 
            <h3 className=" uppercase text-center
                            text-white
                            tracking-widest 
                            mb-4">In Search Of Untouched Wilderness
                            
            </h3>
            <h2 className=" text-5xl mx-4
                            text-white
                            font-serif text-center">Good Things Take Time
            </h2>
            <h2 className="text-white">so, this site is currently under development</h2>
            <h2 className="text-white bg-red-400 p-2 text-xl font-semibold w-full text-center mt-10">probable release date, 1st April</h2>
            <button className="border-solid border-[1px] mt-16 text-white
                                border-white p-2">Read More</button>
        </div>
        
    </div>
    )
}