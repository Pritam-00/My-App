import React, { useState } from "react";
import TrekCard from "./TrekCard";


export default function TrekCardsBox ({mockdata}) {

        const [reading, setReading] = useState(0)
        const [isOpen, setIsOpen] = useState(false)

        function handleClick (selected) {
                setReading(selected)
                setIsOpen(condition => !condition)
        }

    return (
        <div className="flex 
                        overflow-x-auto 
                        snap-start
                        bg-zinc-800">
                <TrekCard {...mockdata[0]} onButtonClick={() => handleClick('0')} isOpen={reading==='0'? isOpen:false}/>

                <TrekCard {...mockdata[1]} onButtonClick={() => handleClick('1')} isOpen={reading==='1'? isOpen:false}/>

                <TrekCard {...mockdata[2]} onButtonClick={() => handleClick('2')} isOpen={reading==='2'? isOpen:false}/>
                </div>
    )
}