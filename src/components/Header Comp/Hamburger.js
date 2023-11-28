import React from "react";

export default function Hamburger ({isOpen}) {
    return (
        <div className="w-8 h-8 mr-4 flex flex-col
                        justify-around flex-nowrap 
                        md:hidden">
            <div className={`w-8 h-1 rounded-lg bg-white duration-500
                           ${isOpen ? 'rotate-45 translate-y-[11px]' : 'rotate-0'}`}></div>
            <div className={`w-8 h-1 rounded-lg bg-white duration-500
                           ${isOpen ? 'rotate-90 opacity-0 ' : 'opacity-100 '}`}></div>
            <div className={`w-8 h-1 rounded-lg bg-white duration-500
                           ${isOpen ? '-rotate-45 -translate-y-[11px]' : 'rotate-0'}`}></div>
        </div>
    )
}