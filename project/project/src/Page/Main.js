import Xuli from '../component/xuLi';
import { AppContext } from "../context"
import { React,useContext,useState,useEffect} from "react"
function Main(){
    const{height}=useContext(AppContext)
    let styleObject ={marginTop:`${height}px`}

   
    return(
        <div className='container-fluid p-0 pt-5 ' style={styleObject}>
             <Xuli/>
        </div>
      
    )
}
export default Main