import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import NotFound from "../Pages/NotFound/NotFound";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouter from "./PrivateRouter";
import About from "../Pages/Home/About/About";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '*',
            element: <NotFound></NotFound>
        },
        {
            path: '/checkout/:id',
            element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/bookings',
            element: <PrivateRouter><Bookings></Bookings></PrivateRouter>
        }
      ]
    },
  ]);

 
export default router;