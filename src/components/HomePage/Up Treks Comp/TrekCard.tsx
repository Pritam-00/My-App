import React from "react";
import { Link } from "react-router-dom";
import BookNowButton from "./BookNowButton";


export default function TrekCard({onButtonClick, isOpen, trekIndex, trekImg, trekName, trekState, trekDescription, trekDistance, trekDuration, trekDifficulty, trekCost, trekInfo, trekLink}: any) {

    return (
        <div className="m-4 
                        border-[1px] 
                        border-slate-700 
                        bg-zinc-900 w-72 
                        flex-shrink-0 rounded-xl
                        
                        ">

                <Link to={trekLink}><img 
                src={trekImg} 
                alt={trekName} 
                className =" h-44 w-72 object-cover rounded-t-xl p-2" ></img>
                </Link>
         

            <div className="border-b-[1px]
                          border-slate-700 
                            p-2">
                  <div className="flex items-center">
                    <h2 className=" pl-1 
                                    font-semibold 
                                    uppercase
                                    text-green-100 
                                    ">{trekName}</h2>
                    <h4 className=" px-2 ml-4 text-[10px]
                                    text-center
                                    font-medium
                                    uppercase
                                    rounded-lg
                                    bg-slate-700
                                    text-blue-300
                                    ">{trekState}</h4>
                </div>
                <p className="  text-xs 
                                p-1 
                                font-extralight 
                                tracking-wide 
                                text-white">{trekDescription}</p>
            </div>

            <div className="p-2 pt-1
                            border-b-[1px]
                            border-slate-700">
                <h3 className=" pl-1 
                                font-bold
                                text-sm
                                uppercase
                                text-neutral-500 
                                inline-block">Trek Details</h3>
                <div className="px-4 pt-1 flex justify-between">
                        <div className="">
                            <h4 className="text-xs text-cyan-300">Distance</h4>
                            <h6 className=" text-cyan-300 font-medium">{trekDistance}</h6></div>
                        <div className="">
                            <h4 className="text-xs text-cyan-300">Duration</h4>
                            <h6 className=" text-cyan-300 font-medium">{trekDuration}</h6></div>
                        <div className="">
                            <h4 className="text-xs text-cyan-300">Difficulty</h4>
                            <h6 className=" text-cyan-300 font-medium">{trekDifficulty}</h6></div>
                </div>
            </div>

            <div className="flex justify-between mx-4 my-4 ">
                <div className="inline-block">
                    <h3 className="font-bold text-xl text-white ">INR {trekCost}</h3>
                    <h4 className="text-xs text-yellow-400">{trekInfo}</h4>
                </div>
                
                <BookNowButton onButtonClick={onButtonClick} isOpen={isOpen} buttonName='Book Now' /> 
            </div>
   
        </div>
    )
} 