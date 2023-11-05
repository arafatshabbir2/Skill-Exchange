import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Root from "./Root";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import AddJob from "../../Pages/AddJob/AddJob";
import MyPostedJob from "../../Pages/MyPostedJob/MyPostedJob";
import MyBids from "../../Pages/MyBIds/MyBids";
import BidRequest from "../../Pages/BidRequests/BidRequest";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/addJob',
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'/myPostedJob',
                element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path:'/myBids',
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path:'/bidRequest',
                element:<PrivateRoute><BidRequest></BidRequest></PrivateRoute>
            }


        ]
    }
   ])


export default routes;