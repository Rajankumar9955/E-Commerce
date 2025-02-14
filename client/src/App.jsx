


import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import AdminDashboard from "./Admin/AdminDashboard"
import InsertProduct from "./Pages/InsertProduct"
const App=()=>{
  return(
    <>
    <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/> 
                        </Route>


                        <Route path="admindashboard" element={<AdminDashboard/>}>
                          <Route path="insertproduct" element={<InsertProduct/>}/>
                        </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}
export default App