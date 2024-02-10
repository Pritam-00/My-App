import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import TrekPage from './components/TrekPage/TrekPage';
import Error from './components/Error/Error';
import HomePage from './components/HomePage/HomePage';
import CreateGroup from './components/CreateGroup/CreateGroup';


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
                path: 'Trekkings',
                element: <TrekPage/>
            },
            {
                path: 'create-group',
                element: <CreateGroup/>
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
