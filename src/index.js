import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import Signup from './components/Signup';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Reset from './components/Reset';



const Applayout = ()=> {
    
     return(
    <>
          <Home/>
    </>
   );
};

const appRouter = createBrowserRouter([
           {
              path:"/",
              element:<Applayout/>,
           },
           {
              path:"/signup",
              element:<Signup/>,
           },
           {
            path:"/login",
            element:<Login/>,
           },
           {
            path:"/reset",
            element:<Reset/>,
           },
       
      ]);



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


