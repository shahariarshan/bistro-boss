import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddItems from "../Pages/DashBoard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/ManageItems";
import Update from "../Pages/DashBoard/Update/Update";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome";
import ErrorPage from "../Pages/error/ErrorPage";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        }
        
      ]
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'signUp',
      element:<SignUp></SignUp>
    },
  {
    path:'dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      // normal user routes 
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      // admin only routes 
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><Update></Update></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path:'allUser',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
  ]);