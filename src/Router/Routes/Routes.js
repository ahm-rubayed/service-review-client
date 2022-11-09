import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    }
])

export default router;