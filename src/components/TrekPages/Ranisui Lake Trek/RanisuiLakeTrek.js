import React from "react";
import TrekBanner from "../TrekBanner";
import ranisuiBanner from "../../../resources/Rani-Sui-Lake-Trek-Manali2.webp";
import BriefDescription from "../BriefDescription";


const mockdata = [
  {
    trekIndex: 101 ,
    trekImg: ranisuiBanner,
    trekName: 'Ranisui Lake Trek',
    trekState: 'Himachal',
    trekDescription: 'At the back yard of Manali, offers a serene summit (13, 220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
    trekDistance: '25km',
    trekDuration: '4Days',
    trekDifficulty: '0.7',
    trekCost: '9,500',
    trekInfo: 'stay included',
    trekLink: '/ranisui-lake-trek',
  }
  ]

export default function RanisuiLakeTrek() {
    return(
        <>
        <TrekBanner {...mockdata[0]} />
        <BriefDescription/>
        </>
    )
}