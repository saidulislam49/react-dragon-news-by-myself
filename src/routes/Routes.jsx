import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import NewsDetails from "../pages/Home/NewsDetails";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import PrivateProvider from "../providers/PrivateProvider";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },
        {
          path: '/news_detail/:id',
          element: <PrivateProvider><NewsDetails></NewsDetails></PrivateProvider>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        }
      ]
    },
]);


export default routes;