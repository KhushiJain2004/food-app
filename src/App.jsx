import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/nav";

// import Cart from './pages/cart/cart.jsx'
// import Order from './pages/order/order.jsx'



export default function App()
{
  return(
     <div className='app'>
      <Navbar/>
     
      <Outlet/>
     </div> 
  )
}