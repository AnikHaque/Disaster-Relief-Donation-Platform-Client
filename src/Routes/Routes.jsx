import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MyFormComponent from "../pages/MyFormComponent";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);