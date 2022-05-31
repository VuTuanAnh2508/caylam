import Sub1 from "./sub_nav1"
import Sub2 from "./sub_nav2"
import Sub3 from  "./sub_nav3"
import { useRef,useEffect,useContext } from "react"
import { AppContext } from "../context"
function Navbar(){
    const{changeHeight}=useContext(AppContext)
    const hightNavbar=useRef();
    useEffect(() => {
        let h=hightNavbar.current.getBoundingClientRect().height;
        if(h!==undefined){
            changeHeight(h)
        }
      },[]);
    
    return(
        <div className="container-fluid p-0 kolo" ref={hightNavbar}>
            <Sub1 className=""/>
            <Sub2 />
            <Sub3/>
        </div>
    )
}
export default Navbar;