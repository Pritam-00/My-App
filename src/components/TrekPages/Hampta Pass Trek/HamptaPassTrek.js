import React from "react";
import TrekBanner from "../TrekBanner";
import hamptaPassBanner from "../../../resources/Hampta-Pass-Trek.jpg"


const mockdata = [
  {
    trekIndex: 103 ,
    trekImg: hamptaPassBanner,
    trekName: 'Hampta Pass Trek',
    trekState: 'Himachal',
    trekDescription: 'At the back yard of Manali, offers a serene summit (13, 220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
    trekDistance: '35km',
    trekDuration: '5Days',
    trekDifficulty: '0.5',
    trekCost: '10,500',
    trekInfo: 'transport included',
    trekLink: 'hampta-pass-trek',
  }
  ]

export default function HamptaPassTrek() {
    return(
        <>
        <TrekBanner {...mockdata[0]} />
        <h1 className="text-4xl p-36 font-bold font-poppins text-center">Hello</h1>
        </>
    )
}