import React from "react";

export default function BookNowButton ({onButtonClick, isOpen, buttonName}: any) {
    
    return (
        <div className="relative my-auto">

                    <button onClick={onButtonClick} className=" py-2
                                        px-8 
                                        text-sm
                                        rounded-full
                                        text-white
                                        font-medium
                                        bg-sky-600
                                        
                                        ">
                        {buttonName}
                    </button>
        
                    {isOpen && (<div className="h-40 w-40
                                              bg-red-700 
                                                absolute
                                                right-0
                                                bottom-0
                                                rounded-lg
                                                rounded-ee-2xl                                             
                                                "> 
                                        <div onClick={onButtonClick} 
                                        className=" p-2
                                                    cursor-pointer
                                                    inline-block
                                                    font-bold
                                                    text-lg
                                                    text-white
                                                    ">X</div>
                                                
                                </div>)}

                    
                </div>
    )
}