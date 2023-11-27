import React from "react";
import backGround from "../../resources/ranisui-lake.jpg"

export default function HeroBanner () {
    return (
        <div className=" h-[80vh] bg-cover bg-center p-8 pt-40
                         flex flex-col justify-start
                         items-center" style={{backgroundImage: `url(${backGround})`}}> 
            <h3 className=" uppercase text-center
                            text-white
                            tracking-widest 
                            mb-4">In Search Of Untouched Wilderness
                            
            </h3>
            <h2 className=" text-5xl mx-4
                            text-white
                            font-serif text-center">Ranisui lake
            </h2>
            <button className="border-solid border-[1px] mt-16 text-white
                                border-white p-2">Read More</button>
        </div>
    )
}