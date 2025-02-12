

import {Outlet} from "react-router-dom"
import TopMenu from "./Components/TopMenu";
import MenuBar from "./Components/MenuBar";
import Footer from "./Components/Footer";
const Layout=()=>{
    return(
        <>
           <TopMenu/>
           <MenuBar/>
           <Footer/>

           <div>
               <Outlet/>
           </div>
        </>
    )
}
export default Layout;