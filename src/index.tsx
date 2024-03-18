import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Error from './components/Error/Error';
import Home from './components/HomePage/HomePage';
import CreateGroup from './components/CreateGroup/CreateGroup';
import BhriguLakeTrek from './components/TrekPages/Bhrigu Lake Trek/BhriguLakeTrek';
import YunamPeakExpedition from './components/TrekPages/Yunam Peak Expedition/YunamPeakExpedition';
import Ranisui from './components/TrekPages/Ranisui Lake Trek/RanisuiLakeTrek';
import HamptaPassTrek from './components/TrekPages/Hampta Pass Trek/HamptaPassTrek';


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home />
            },

            {
                path: 'create-group',
                element: <CreateGroup/>
            },

            {
                path: 'bhrigu-lake-trek',
                element: <BhriguLakeTrek/>
            },

            {
                path: 'yunam-peak-expedition',
                element: <YunamPeakExpedition/>
            },

            {
                path: 'ranisui-lake-trek',
                element: <Ranisui />
            },

            {
                path: 'hampta-pass-trek',
                element: <HamptaPassTrek/>
            }

        ]
    },

    {
        path: "*",
        element: <Error/>
    }


])



const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
   
        <RouterProvider router={router}/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
