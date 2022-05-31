import { useParams, Link } from 'react-router-dom'
import { AppContext } from "../context"
import { React,useContext,useRef,useEffect,useState, useLayoutEffect} from "react"
import Data from '../data';
import Search from './Search';
import Sort from './Sort';
import View from './View';
import useDimensions from 'react-use-dimensions';

function Xuli(){
    let arr=[];
    let number
    const{view,types}=useContext(AppContext)
    const {type,page} = useParams()
   
        const [ref1, size1] = useDimensions();
        const [ref2, size2] = useDimensions();
        const [ref3, size3] = useDimensions();
        const [ref4, size4] = useDimensions();
        const [ref5, size5] = useDimensions();
        const [ref6, size6] = useDimensions();
        const [ref7, size7] = useDimensions();
   
   
    

  

    if(type==="male"){
         number=0;
    }
    else if(type==="female"){
        number=1;
   }
    else if(type==="children"){
        number=2;
   }
    else if(type==="sport"){
        number=3;
   }
   if(view!==0&&view!==1){
    return(
       
        <div className='center'>
        <div className='size row '>
        <div className="col-xl-2 p-0" ref={ref1}>
           <Search x={size1.height}/>
        </div>
        <div className="col-xl-10 p-0 ">
        <Sort/>
        <div className='row'>
        {view.map((item)=>{
            return(
                <div className='col-xl-3 p-3 '>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        </div>
        </div>
       </div>
    
    )
   }
   else if(view===1){
       return(
        <div className='center'>
        <div className='size row '>
        <div className="col-xl-2 p-0 "  ref={ref2}>
           <Search x={size2.height}/>
        </div>
        <div className="col-xl-10 p-0 ">
        <Sort/>
        <div className='center'>
        <h1>Không tìm thấy sản phẩm phù hợp !</h1>
        </div>
        </div>
        </div>
        </div>
           
       )
   }
  
   else {
  
   Data[number].private.map((item)=>{
       let value={
           name:item.name,
           price:item.price,
           image:item.info[0].image,
           id:item.id
       }
      return(
       arr=arr.concat(value)
      )

   })  
   if(arr.length<=12){
    return(
        <div className='center'>
        <div className='size row '>
        <div className="col-xl-2 p-0"  ref={ref3}>
           <Search x={size3.height}/>
        </div>
        <div className="col-xl-10 p-0 ">
        <Sort/>
        <div className='row'>
        {arr.map((item)=>{
            return(
                <div className='col-xl-3 p-3 '>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        </div>
        </div>
       </div>
    )
    }
    
    else if(arr.length>12){
        let numberChap
        let mang=[]
        let mang2=[]
        let length=arr.length
        let a=Math.floor(length/12)
        if(length%12>0){numberChap=a+1}
        else if(length%12===0){numberChap=a}
        for(let i=0;i<numberChap;i++){
            mang2=mang2.concat(i+1)
        }
        if(page===undefined){
            for(let i=1;i<=12;i++){
               mang=mang.concat(arr[i-1])
            }
            return(
                
      <div className='center'>
        <div className='size row '>
        <div className="col-xl-2 p-0"  ref={ref4}>
           <Search x={size4.height}/>
        </div>
        <div className="col-xl-10 p-0 ">
        <Sort/>
        <div className='row '>
        {mang.map((item)=>{
            return(
                <div className='col-xl-3 p-3 '>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        <div className='center mt-3'>
                 {mang2.map((item)=>
                     {
                         return(
                             <>
                               <Link className='Link2' to={`/${type}/${item}`}>
                             <div className='m-3 '>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>
                 </div>
        </div>
       </div>
            )
        }

        else if(page!==undefined){
            let top=12

            if(top*page>length){
                let i=top*page-11 
                for(i;i<=length;i++){
                   mang=mang.concat(arr[i-1])
                }
                return(
         <div className='center'>
        <div className='size row '>
        <div className="col-xl-2 p-0"  ref={ref5}>
           <Search x={size5.height}/>
        </div>
        <div className="col-xl-10 p-0 ">
        <Sort/>
        <div className='row'>
        {mang.map((item)=>{
            return(
                <div className='col-xl-3 p-3 '>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        <div className='center mt-3'>
                     {mang2.map((item)=>
                     {
                         return(
                             <>
                             <Link className='Link2' to={`/${type}/${item}`}>
                             <div className='m-3 '>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>
                     </div>
        </div>
       </div>
                )
            }
            else if(top*page<length){
                let i=top*page-11 
                for(i;i<=top*page;i++){
                   mang=mang.concat(arr[i-1])
                }
                return(
     <div className='center'>
        <div className='size row '>
        <div className="col-xl-2 p-0" ref={ref6}>
           <Search x={size6.height}/>
        </div>
        <div className="col-xl-10 p-0 ">
        <Sort/>
        <div className='row'>
        {mang.map((item)=>{
            return(
                <div className='col-xl-3 p-3 '>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        <div className='center mt-3'>
                    {mang2.map((item)=>
                     {
                         return(
                             <>
                             <Link className='Link2' to={`/${type}/${item}`}>
                             <div className='m-3 '>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>
                    </div>
        </div>
       </div>
                )
            }
        }

        
     
    }
    
 

   }
    
    }
    export default Xuli;

