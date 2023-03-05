import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import BookCollection from "../../Pages/BookCollection/BookCollection";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Register/>
        },
        {
          path:'/collections/:id',
          element:<BookCollection/>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        },
      ]
    }
  ])

  export default router;