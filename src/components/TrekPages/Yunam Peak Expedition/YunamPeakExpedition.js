import React from "react";
import yunamBannerPhoto from "../../../resources/Yunam-Mock.jpg";
import TrekBanner from "../TrekBanner";


const mockdata = [
  {
  trekIndex: 104 ,
  trekImg: yunamBannerPhoto,
  trekName: 'Yunam Peak Expedition',
  trekState: 'Himachal',
  trekDescription: 'Anali,220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
  trekDistance: '40km',
  trekDuration: '9Days',
  trekDifficulty: '6',
  trekCost: '25,000',
  trekInfo: 'transport included',
  trekLink: '/yunam-peak-expedition',
  }
  ]

export default function YunamPeakExpedition() {
    return(
        <>
        <TrekBanner {...mockdata[0]} />
        <h1 className="text-4xl p-36 font-bold font-poppins text-center">Yunam Peak Expedition</h1>
        </>
    )
}