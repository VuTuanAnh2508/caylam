import { Link } from 'react-router-dom';
function View({image,name,price,type,id,trang}){
        return(
            
       <>
       <Link className='Link2' to={`/${type}/${trang}/${id}`}>
        <div className='view'>


       
       <img src={image} className="h-80 w-100"></img>
       <div className="h-20 w-100 ">
        <ul className=''>
            <li className='d-flex justify-content-center'><div className=''>{name}</div></li>
            <li className='d-flex justify-content-center'><div className=''>{price}Vnđ</div></li>
        </ul>
       
        
       </div>
        
       </div>
       </Link>
     
       </>
      
        
        
         
        )
    }


export default View;
