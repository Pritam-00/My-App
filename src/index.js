import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Error from './components/Error/Error';
import HomePage from './components/HomePage/HomePage';
import CreateGroup from './components/CreateGroup/CreateGroup';
import BhriguLakeTrek from './components/TrekPages/Bhrigu Lake Trek/BhriguLakeTrek';import YunamPeakExpedition from './components/TrekPages/Yunam Peak Expedition/YunamPeakExpedition';
;


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <HomePage/>
            },

            {
                path: 'bhrigu-lake-trek',
                element: <BhriguLakeTrek/>
            },
            {
                path: 'create-group',
                element: <CreateGroup/>
            },
            {
                path: 'yunam-peak-expedition',
                element: <YunamPeakExpedition/>
            }

        ]
    },

    {
        path: "*",
        element: <Error/>
    }


])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
        <RouterProvider router={router}/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
