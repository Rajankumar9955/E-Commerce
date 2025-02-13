

import Footer from "./Components/Footer"
import TopBar from "./Components/TopBar"
import Outlet from "react-router-dom"
const Layout=()=>{
    return(
        <>
           <TopBar/>
           <div>
            <Outlet/>
           </div>
           <div>
            <Footer/>
           </div>
        </>
    )
}
export default Layout