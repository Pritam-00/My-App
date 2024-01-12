import React from "react";
import useStore from "../../Store/store";



export default function Hamburger () {

    const {hamburgerOpen} = useStore((state) => {
        return {hamburgerOpen: state.hamburgerOpen}
      })

    return (
        <div className="w-8 h-8 mr-4 flex flex-col
                        justify-around flex-nowrap 
                        md:hidden">
            <div className={`w-8 h-1 rounded-lg bg-white duration-500
                           ${hamburgerOpen ? 'rotate-45 translate-y-[11px]' : 'rotate-0'}`}></div>
            <div className={`w-8 h-1 rounded-lg bg-white duration-500
                           ${hamburgerOpen ? 'rotate-90 opacity-0 ' : 'opacity-100 '}`}></div>
            <div className={`w-8 h-1 rounded-lg bg-white duration-500
                           ${hamburgerOpen ? '-rotate-45 -translate-y-[11px]' : 'rotate-0'}`}></div>
        </div>
    )
}