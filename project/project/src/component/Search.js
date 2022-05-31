import SearchColor from "./searchColor";
import SearchPrice from "./searchPrice";
import {GoSearch} from 'react-icons/go';
import { AppContext } from "../context"
import { React,useContext,useState,useEffect,useRef} from "react"
import useDimensions from 'react-use-dimensions';
function Search({x}){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [h, setH] = useState(0);
    const [hSearch, size] = useDimensions();
    const handleScroll = () => {
      const position = window.pageYOffset;
       if(x-position>=size.height){
      setScrollPosition(position);
       }
      else if(x-position<size.height){
      setScrollPosition(0);
      }
    };
    useEffect(() => {
          window.addEventListener("scroll", handleScroll);
        },);
     
      
   return(
       <>
       <div className="" style={{marginY:`${scrollPosition}px`}} ref={hSearch}>Tìm kiếm <GoSearch/>
       
     
       <SearchColor/>
       <SearchPrice/>
       </div>
       </>
   )
}
export default Search;