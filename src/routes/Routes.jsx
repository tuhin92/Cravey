import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Components/Home/Home";
import Foods from "../Components/Foods/Foods";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/foods',
                element: <Foods></Foods>
            }
        ]
    },
]);

export default routes;