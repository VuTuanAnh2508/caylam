import Data from "../data"
import { useContext } from "react"
import { AppContext } from "../context"
const SearchPrice=()=>{
    const{number,changeView}=useContext(AppContext)
    let data=Data[number].private
    let gui=[]
    const getPrice=Data.map((data)=>data.private.map((items)=>items.price)) 
    const prices=[...new Set(getPrice.flat(1))]
    prices.sort(function(a, b) {
      return b - a;
    });

    function handleSubmit(e) {
        e.preventDefault()
      }

    function subPrice(e){
      let arr=[]
   
      let top=e.target.value
      console.log(top)
      let a=prices.filter(function(price,index){
      return price<=top;
      })
      if(a.length>=1){
        for(let i=0;i<a.length;i++){
           let la=a[i]
           gui=gui.concat(data.filter((i)=>i.price===la))
        }
        gui.map((item)=>{
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
   changeView(arr)
      }
     else if(top<=prices[prices.length-1]&&top!=0){
       changeView(1)
     }
     else if(top<=0){
      
        changeView(0)
      }
    }
  
    return(
        <>
      <form onSubmit={handleSubmit}>
          <div className="my-3 border center"><span className="">Theo mức giá</span></div>
          <ul>
         <li className=""><span>Giá cao nhất</span></li>
          <li><input className="w-50"
          type="text"
          onChange={subPrice}
          /></li>
          </ul>
      </form>
      </>

   )
}
 export default SearchPrice;