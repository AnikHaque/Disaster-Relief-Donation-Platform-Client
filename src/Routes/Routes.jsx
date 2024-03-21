import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MyFormComponent from "../pages/MyFormComponent";
import Login from "../pages/login/Login";

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
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);