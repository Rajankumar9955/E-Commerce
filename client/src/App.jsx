


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
                        <Route path="usersingup" element={<UserSignUp/>}/> 
                        <Route path="userlogin" element={<Userlogin/>}/> 
                        
                        </Route>


                        <Route path="admindashboard" element={<AdminDashboard/>}>
                          <Route path="insertproduct" element={<InsertProduct/>}/>
                          <Route path="updateproducts" element={<UpdateProducts/>}/>
                        </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}
export default App