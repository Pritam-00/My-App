import React from "react";

export default function SingleDate ({trekGroupStartDate, trekGroupFinishDate}) {

    return (
        <div className="m-4 p-1 flex flex-row justify-between flex-shrink-0 bg-sky-500 w-48 h-24 rounded-xl drop-shadow-2xl">
            <div className="flex flex-col justify-evenly">
                <div className="flex flex-row pl-1 ">
                    <div className="self-center">
                    <svg width="10px" height="40px" viewBox="0 0 10 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Interface / Line_Xl">
                    <path id="Vector" d="M1 80 V3" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </div>
                    <div>
                        <div className="text-white font-semibold font-poppins p-0">{trekGroupStartDate}</div>
                        <div className="text-white font-semibold font-poppins">{trekGroupFinishDate}</div>
                    </div>
                </div>

                <div className="text-sm font-semibold pl-4  ">
                5seats left
                </div>
            </div>

            <div className="self-end ">
                icon
            </div>
        </div>
    )
}