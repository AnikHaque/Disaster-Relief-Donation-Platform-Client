import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/'
            }
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);