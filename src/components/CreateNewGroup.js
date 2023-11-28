import React from "react";

export default function CreateNewGroup () {


    return (
        <div className="bg-black p-4">
        <div className="flex flex-col md:flex-row justify-around 
                        p-4">
            <h3 className="text-white
                            font-bold
                            text-3xl
                            ">
                        Add Your Own Group Date
            </h3>
            <button className=" flex
                                items-center
                                p-2 mt-4  md:mt-0                         
                                rounded-lg
                                text-black
                                bg-white">
                <svg    className="mr-1"
                        fill="#eab308" 
                        width="20px" 
                        height="20px" 
                        viewBox="0 0 32 32" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg">
                <title>plus</title>
                <path d="M15.5 29.5c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.938 15.938c0-0.552-0.448-1-1-1h-4v-4c0-0.552-0.447-1-1-1h-1c-0.553 0-1 0.448-1 1v4h-4c-0.553 0-1 0.448-1 1v1c0 0.553 0.447 1 1 1h4v4c0 0.553 0.447 1 1 1h1c0.553 0 1-0.447 1-1v-4h4c0.552 0 1-0.447 1-1v-1z"></path>
                </svg>

                Create New Group
            </button>
        </div>   

        <p className="text-yellow-500
                        text-center 
                        text-sm pt-2
                        px-4 py-2">
                write a deatiled process of creating group, Create your own customized trek group
                on feasible dates 
        </p>
       </div> 
    )
}