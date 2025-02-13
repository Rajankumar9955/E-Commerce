

import Footer from "./Components/Footer"
import MenuBar from "./Components/MenuBar"
import TopBar from "./Components/TopBar"
import {Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
           <TopBar/>
           <MenuBar/>
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