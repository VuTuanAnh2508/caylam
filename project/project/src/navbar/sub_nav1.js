import { AppContext } from "../context"
import { React,useContext} from "react"
import { FaFacebook } from 'react-icons/fa';
import {SiTwitter} from 'react-icons/si';
function Sub_nav1(){
    const{item}=useContext(AppContext)
    return(
          <div className="center h-10 bg-dark ">
              <div className="row size h-100">
        <div className="col-xl-6 p-0">
        <ul className="d-flex h-100 font25">

            <li className="center py-2">Tin tức</li>
            <div className="line bg-light"></div>
            <li className="center py-2">Kênh người bán</li>
            <div className="line bg-light"></div>
            <li className="center py-2">Tra cứu đơn hàng</li>
            <div className="line bg-light"></div>
            <li className="center py-2">
                <ul className="d-flex">
                     <li className="center">Kết nối</li>
                     <li className="center px-2"><FaFacebook className="icon"/></li>
                     <li className="center"><SiTwitter className="icon"/></li>
                </ul>
            </li>
        </ul>
        </div>
        
        <div className="col-xl-6 p-0">
        <ul className="d-flex flex-row-reverse h-100 font26">
            
            <li className=" center">Tài khoản</li>
            <div className="line bg-light"></div>
            <li className=" center">
                <ul className=" ">
                <li className=" "><span>Giỏ hàng: <span>{item}</span></span></li>
               </ul>
            </li>
            
        </ul>

        </div>
        
    </div>


          </div>
       

    
    )
}

export default Sub_nav1;