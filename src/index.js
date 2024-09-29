import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/header/Navbar';
import Main from './Components/main/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './util/Error';
import Search from './Components/search/Search';
import App from './App';
import Menu from './Components/restaurants-menu/Menu';



const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/swiggy-clone-react",
        element: <Main />
      },
      {
        path: "/swiggy-clone-react/search",
        element: <Search />
      },
      {
        path: "/swiggy-clone-react/restaurant/:resid",
        element: <Menu />
      }
    ],
    errorElement: <Error />
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myRouter} />
);



