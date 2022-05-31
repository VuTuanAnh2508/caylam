import React,{createContext,useReducer} from "react";
import reducer from "./reducer"

export const AppContext = React.createContext()
const init={
    number:0,
    types:0,
    view:0,
    item:0,
    height:0,
   
}

export default ({children})=>{
    const [state,dispatch]=useReducer(reducer, init)
    
    const choose=(types)=>{
        dispatch ({type:"CHOOSE",payload:types})
    }
    const changeType=(number)=>{
      dispatch ({type:"CHANGETYPE",payload:number})
  }
  const changeView=(view)=>{
    dispatch ({type:"CHANGEVIEW",payload:view})
}
const changeItem=(item)=>{
  dispatch ({type:"CHANGEITEM",payload:item})
}
const changeHeight=(height)=>{
  dispatch ({type:"CHANGEHEIGHT",payload:height})
}

    return(
        <AppContext.Provider
        value={{
          ...state,
          choose,
          changeType,
          changeView,
          changeItem,
          changeHeight,
        }}
      >
        {children}
      </AppContext.Provider>
    )
}

