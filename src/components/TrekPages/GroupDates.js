import React from "react";
import SingleDate from "./SingleDate";

export default function GroupDates({ trekdates }) {
  return (
    <div className="relative h-40">
      <div
        className="flex 
        overflow-x-auto
        no-scrollbar
        snap-start h-full"
      >
        <SingleDate {...trekdates[0]} />
        <SingleDate {...trekdates[1]} />
        <SingleDate {...trekdates[2]} />
        <SingleDate {...trekdates[3]} />
      </div>

      <div className="px-4 font-basierCircle bg-transparent absolute top-32">
        <span className="font-semibold">Create your own group.</span>
        <span className="font-semibold text-amber-600"> Click here.</span>
      </div>
    </div>
  );
}
