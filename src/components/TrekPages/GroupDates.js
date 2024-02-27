import React from "react";
import SingleDate from "./SingleDate";
import { Link } from "react-router-dom";

export default function GroupDates({ trekdates }) {
  return (
    <div className="relative h-40">
      <div
        className="flex 
        overflow-x-auto
        no-scrollbar
        snap-start h-full"
      >
        <Link to="/create-group"><SingleDate {...trekdates[0]} /></Link>
        <Link to="/create-group"><SingleDate {...trekdates[1]} /></Link>
        <Link to="/create-group"><SingleDate {...trekdates[2]} /></Link>
        <Link to="/create-group"><SingleDate {...trekdates[3]} /></Link>
      </div>

      <div className="px-4 font-basierCircle bg-transparent absolute top-32">
        <span className="font-semibold">Create your own group.</span>
        <span className="font-semibold text-amber-600"> Click here.</span>
      </div>
    </div>
  );
}
