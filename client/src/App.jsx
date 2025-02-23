


import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import AdminDashboard from "./Admin/AdminDashboard"
import InsertProduct from "./Admin/InsertProduct"
import UpdateProducts from "./Admin/UpdateProducts"
import Cart from "./Components/Cart"
import Wishlist from "./Components/Wishlist"
import Details from "./Pages/Details"
import UserSignUp from "./Auth/UserSignUp"
import Userlogin from "./Auth/Userlogin"
import CheckOut from "./Pages/CheckOut"
import CustomerOrders from "./Admin/CustomerOrders"
import DisplayCustomer from "./Admin/DisplayCustomer"
import UpdateCustomer from "./Admin/UpdateCustomer"
import AdminProfile from "./Admin/AdminProfile"
import SingleProductOrder from "./Pages/SingleProductOrder"
import UserDashboard from "./Users/UserDashboard"
const App=()=>{
  return(
    <>
    <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/> 
                        <Route path="cart" element={<Cart/>}/> 
                        <Route path="wishlist" element={<Wishlist/>}/> 
                        <Route path="details/:id" element={<Details/>}/> 
                        <Route path="usersignup" element={<UserSignUp/>}/> 
                        <Route path="userlogin" element={<Userlogin/>}/> 
                        <Route path="checkout" element={<CheckOut/>}/> 
                        <Route path="singleproductorder/:id" element={<SingleProductOrder/>}/> 
                        
                        </Route>
                               {/* Admin DashBoard  */}
                        <Route path="admindashboard" element={<AdminDashboard/>}>
                          <Route path="insertproduct" element={<InsertProduct/>}/>
                          <Route path="updateproducts" element={<UpdateProducts/>}/>
                          <Route path="customerorders" element={<CustomerOrders/>}/>
                          <Route path="displaycustomer" element={<DisplayCustomer/>}/>
                          <Route path="updatecustomer" element={<UpdateCustomer/>}/>
                          <Route path="adminprofile" element={<AdminProfile/>}/> 
                          <Route index element={<AdminProfile/>}/>
                               
                        </Route>

                                   {/* UserDashBoard */}
                            <Route path="userdashboard" element={<UserDashboard/>} />
                  </Routes>
    </BrowserRouter>
    </>
  )
}
export default App