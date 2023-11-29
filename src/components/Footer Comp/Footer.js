import React from "react";

export default function Footer () {
    return (
<footer className="">

         
            <div className="p-4 bg-pink-950">
                <h2 className="uppercase
                             text-white font-bold 
                                text-3xl border-b-[1px]">The Trail Makers</h2>
            </div>

    <div className="bg-gray-900 pl-2 flex flex-wrap">

             <div className="p-2 w-1/2 md:w-1/4 pr-10">
                <h5 className="text-white uppercase font-medium">Treks by Season</h5>
                <ul className="pt-2 text-sm text-white">
                        <li className="pb-1">Summer</li>
                        <li className="pb-1">Monsoon</li>
                        <li className="pb-1">Autumn</li>
                        <li className="pb-1">Winter</li>
                </ul>
            </div>
       
             <div className="p-2 w-1/2 md:w-1/4 sm:pr-10">
                <h5 className="text-white uppercase font-medium">Treks by Month</h5>
                <ul className="p-2 text-sm flex text-white">
                <span className="pr-4">  <li>January</li>
                        <li>Februry</li>
                        <li>March</li>
                        <li>April</li>
                        <li>May</li>
                        <li>June</li>
                </span>
                <span>   <li>July</li>
                        <li>August</li>
                        <li>September</li>
                        <li>October</li>
                        <li>November</li>
                        <li>December</li>
                </span>
                </ul>
            </div>

             <div className="p-2 w-1/2 md:w-1/4 pr-10">
                <h5 className="text-white uppercase font-medium">Treks by Difficulty</h5>
                <ul className="p-2 text-sm text-white ">
                        <li>Easy (0-1)</li>
                        <li>Easy Moderate (1-1.5)</li>
                        <li>Moderate (1.5-2.5)</li>
                        <li>Moderate Difficult (2.5-3)</li>
                        <li>Difficult (3-4)</li>
                        <li>Extreme (4-5)</li>
                </ul>
            </div>

             <div className="p-2 w-1/2 md:w-1/4 sm:pr-10">
                <h5 className="text-white uppercase font-medium">Treks by State</h5>
                <ul className="p-2 text-sm text-white">
                        <li>Himachal</li>
                        <li>Uttarakhand</li>
                        <li>kashmir</li>
                        <li>Uttarakhand</li>
                        <li>North Bengal</li>
                        <li>Sikkim</li>
                </ul>
            </div>
    </div>

    <div className="bg-gradient-to-t from-neutral-900 to-neutral-800 text-white">
        <ul>
            <li>Terms & Condition</li>
        </ul>

    </div>

    <div className="bg-gray-600 text-xs pl-4 p-1">Copyright &copy; 2024 The Trail Makers</div>
</footer>
    )
}