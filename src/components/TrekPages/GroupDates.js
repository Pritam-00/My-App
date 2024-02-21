import React from "react";
import SingleDate from "./SingleDate";

export default function GroupDates ({trekdates}) {

    return (
        <div className="flex 
        overflow-x-auto
        no-scrollbar
        snap-start">
            <SingleDate {...trekdates[0]}/>
            <SingleDate {...trekdates[1]}/>
            <SingleDate {...trekdates[2]}/>
            <SingleDate {...trekdates[3]}/>
        </div>
    )
}
