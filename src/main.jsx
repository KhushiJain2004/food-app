// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { FoodContextProvider } from './context/FoodContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './pages/home/home.jsx'
import Cart from "./pages/cart/cart.jsx";
import Order from "./pages/order/order.jsx";
import Auth from './components/auth/auth.jsx';

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {index:"true",element:<Home />},
        {
          path:"home",
          element:<Home/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'order',
          element:<Order/>
        },
      ],
    },
    {
      path:'/auth',
      element:<Auth/>
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider>
        <RouterProvider router={router}/>
    </CartContextProvider>
)
