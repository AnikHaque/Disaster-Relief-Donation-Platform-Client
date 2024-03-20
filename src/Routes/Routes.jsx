import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);