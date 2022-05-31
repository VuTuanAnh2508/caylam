import { Link } from 'react-router-dom';
import { AppContext } from "../context"
import { React,useContext} from "react"
function Sub_nav3(){
    const{changeType,changeView}=useContext(AppContext)
    function Male(){
        changeView(0)
        changeType(0)
    }
    function FeMale(){
        changeView(0)
        changeType(1)
    }
    function Kiss(){
        changeView(0)
        changeType(2)
    }
    function Sport(){
        changeView(0)
        changeType(3)
    }
    return(
      <div className='center h-10 bg-dark'>
        <div className='size  h-100'>
          <ul className=' d-flex h-100 font28 center' >
              <li className=' mx-5'><Link className='Link' to="/male" onClick={Male}>Nam</Link></li>
              <li className=' mx-5'><Link className='Link' to="/female" onClick={FeMale}>Nữ</Link></li>    
              <li className=' mx-5'><Link className='Link' to="/children" onClick={Kiss}>Trẻ em</Link></li>
              <li className=' mx-5'><Link className='Link' to="/sport" onClick={Sport}>Thể thao</Link></li>
          </ul>
        </div>
      </div>
    
    )
}

export default Sub_nav3;