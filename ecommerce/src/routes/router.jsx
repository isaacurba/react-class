// @ts-ignore
import {createBrowserRouter} from "react-router";
import Login from "@/component/auth/login/Login";
import Signup from "@/component/auth/signup/SignUp";
import Product from "@/component/products/Product"

export const router = createBrowserRouter([
    {
        path : "/",
        element: <Login/>
    },
    {
        path : "/signup",
        element: <Signup/>
    },
    {
        path:"/products",
        element: <Product/>
    }
])