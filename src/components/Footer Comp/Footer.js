import React from "react";

export default function Footer () {
    return (
<footer className="">

         
            <div className="px-6 pt-8 bg-neutral-800 text-orange-400">
                
                <h2 className=" font-poppins
                              font-bold text-3xl ">The Trail Makers</h2>
                <p>follow us on Instagram @the_trail_makers</p>
            </div>

    <div className="bg-neutral-800 p-8 flex flex-wrap">

             <div className="p-2 w-1/2 md:w-1/4 sm:pr-10">
                <h5 className="text-white uppercase font-medium">Treks by Season</h5>
                <ul className="p-2 text-sm font-sans font-extralight text-white">
                        <li className="pb-1">Summer</li>
                        <li className="pb-1">Monsoon</li>
                        <li className="pb-1">Autumn</li>
                        <li className="pb-1">Winter</li>
                </ul>
            </div>
       
             <div className="p-2 w-1/2 md:w-1/4 sm:pr-10">
                <h5 className="text-white uppercase font-medium">Treks by Month</h5>
                <ul className="p-2 text-sm text-white flex font-sans font-extralight ">
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
                <ul className="p-2 text-sm font-sans font-extralight text-white">
                        <li>Easy </li>
                        <li>Easy Moderate </li>
                        <li>Moderate </li>
                        <li>Moderate Difficult </li>
                        <li>Difficult </li>
                        <li>Extreme </li>
                </ul>
            </div>

             <div className="p-2 w-1/2 md:w-1/4 sm:pr-10">
                <h5 className="text-white uppercase font-medium">Treks by State</h5>
                <ul className="p-2 text-sm font-sans font-extralight text-white">
                        <li>Himachal</li>
                        <li>Uttarakhand</li>
                        <li>kashmir</li>
                        <li>Uttarakhand</li>
                        <li>North Bengal</li>
                        <li>Sikkim</li>
                </ul>
            </div>
    </div>

    <div className=" pt-2 bg-black text-center text-sm font-sans font-extralight text-sky-200">
        <ul>
            <li>Terms & Condition</li>
        </ul>

    </div>

    <div className="pb-2 bg-black text-center text-sm font-sans font-extralight text-sky-200">Copyright &copy; 2024 The Trail Makers</div>
</footer>
    )
}