import React from "react";
import TrekBanner from "../TrekBanner";
import bhiguLakeBannerPhoto from "../../../resources/bhrigu-lake.webp";


const mockdata = [
  {
  trekIndex: 102 ,
  trekImg: bhiguLakeBannerPhoto,
  trekName: 'Bhrigu Lake Trek',
  trekState: 'Himachal',
  trekDescription: 'Anali,220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
  trekDistance: '25km',
  trekDuration: '4Days',
  trekDifficulty: '0.6',
  trekCost: '9,500',
  trekInfo: 'transport included',
  trekLink: '/bhrigu-lake-trek',
  }
  ]

export default function BhriguLakeTrek() {
    return(
        <>
        <TrekBanner {...mockdata[0]} />
        <h1 className="text-4xl p-36 font-bold font-poppins text-center">Hello</h1>
        </>
    )
}