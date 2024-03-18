import React from "react";
import NavHeader from "../Header Comp/NavHeader";

export default function TrekBanner({ trekName, trekImg }: any) {
  return (
    <div className="relative ">
      <NavHeader />

      <div
        className=" h-[80vh] bg-cover bg-center p-8 pt-40
                         flex flex-col justify-start
                         items-center"
        style={{ backgroundImage: `url(${trekImg})` }}
      >
        <h3 className=" text-center uppercase text-black font-bold text-4xl mb-4">{trekName}</h3>
        <div className="bg-white text-center px-4">
          <h2 className=" text-4xl text-red-700 r">
            Good Things Take Time
          </h2>
          <h2 className="text-red-600">
            so, this site is currently under development
          </h2>
        </div>
        <h2 className="text-white bg-red-400 p-2 text-xl font-semibold w-full text-center mt-10">
          probable release date, 1st April
        </h2>
        <button
          className="border-solid border-[1px] mt-16 text-white
                                border-white p-2"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
