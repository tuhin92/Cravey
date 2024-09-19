import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "./Home/Home";
import Services from "./Services/Services";
import About from "./About/About";
import Shop from "./Shop/Shop";


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
                path: '/shop',
                element: <Shop></Shop>
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