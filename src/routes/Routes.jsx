import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "./Home/Home";
import Foods from "./Foods/Foods";
import Services from "./Services/Services";
import About from "./About/About";


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
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default routes;