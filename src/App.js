import React, { useState } from "react";
import UpcomingTreks from "./components/HomePage/Up Treks Comp/UpcomingTreks";
import TrekCardsBox from "./components/HomePage/Up Treks Comp/TrekCardsBox";
import DescriptionBox from "./components/HomePage/DescriptionBox";
import CreateNewGroup from "./components/HomePage/CreateNewGroup";
import HeroBanner from "./components/HomePage/Hero/HeroBanner";
import Footer from "./components/Footer Comp/Footer";
import Content1 from "./components/HomePage/Content1";


import ranisuiBanner from './resources/Rani-Sui-Lake-Trek-Manali2.webp';
import bhiguLakeBanner from './resources/bhrigu-lake.webp';
import hamptaPassBanner from './resources/Hampta-Pass-Trek-JustWravel-1597385327-11.jpg';

import { RouterProvider } from 'react-router-dom';


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
  }  ,

  {
    trekIndex: 102 ,
    trekImg: bhiguLakeBanner,
    trekName: 'Bhrigu Lake Trek',
    trekState: 'Himachal',
    trekDescription: 'Anali,220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
    trekDistance: '25km',
    trekDuration: '4Days',
    trekDifficulty: '0.6',
    trekCost: '9,500',
    trekInfo: 'transport included',
  }  ,

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
  }  
]

export default function App() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  function toggleHamburger() {
      setHamburgerOpen(!hamburgerOpen) }
  
  return (
   <div className={`${hamburgerOpen ? 'h-screen overflow-hidden' : 'overflow-auto'}`}>
    <HeroBanner isOpen={hamburgerOpen} menuClick={toggleHamburger}/>
    <DescriptionBox />
    <UpcomingTreks />
    <TrekCardsBox mockdata={mockdata}  />
    <CreateNewGroup />
    <Content1 />
    <Footer />
    </div>
  );
}