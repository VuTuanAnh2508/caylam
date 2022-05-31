import { useParams} from 'react-router-dom'
import {useState,useContext} from "react"     
import Data from "../data"
import { AppContext } from "../context"
function Shop(){
    let number
    const{changeItem}=useContext(AppContext)
    const [box,setBox]=useState()
    const {id,type} = useParams(null)
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
    let datas=Data[number].private
    let obj=datas.filter((item)=>item.id===id)
    let photos=obj[0].info.map((item)=>item.image)
    const [im,setIm]=useState(photos[0])
    
    let name=obj[0].name
    let price=obj[0].price
    let code=id
    let a=obj[0].info.filter((item)=>item.image===im)
    let b=a[0].sides.map((item)=>item.value)
    let c=a[0].sides.map((item)=>item.number)
    let arr2=[]
    for(let i=0;i<=b.length;i++){
        let d={  
            value:b[i],
            number:c[i]
          }
        arr2=arr2.concat(d)
    }
    const [sl,setSl]=useState(c[0])
    function handle(item){
        setIm(item) 
        setSl(c[0])
    }
    let slot
    if(sl!==0){
       slot=sl
    }
    else
      slot="Hết hàng"

    function text(e){
      setBox(parseInt(e.target.value, 10)) 
    }

    function Up(){
      setBox(box+1)
    }
    function Down(){
      setBox(box-1) 
    }
    function Buy(){
       changeItem(box)
       setBox()
    }
    return(
        <>
        {
            photos.map((item)=>{
                return(
                      <img onClick={()=>handle(item)} src={item}/>
                )
            })
        }
          


        <img src={im}/>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <h1>{code}</h1>
        {
            arr2.map((item)=>{return(
                <button onClick={()=>setSl(item.number)}>{item.value}</button>
            )})
        }
         <h1>{slot}</h1>
         <div>
             <input type="search" onChange={text} value={box}/>
             <ul>
                 <li><button onClick={Up}>lên</button></li>
                 <li><button onClick={Down}>xuống</button></li>
             </ul>
             <button onClick={Buy}>Mua</button>



         </div>
        </>

       
    )
}
export default Shop;