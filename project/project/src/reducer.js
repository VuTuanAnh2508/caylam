
const reducer = (state, action) => {
   
    const { type, payload } = action;
    switch (type) {
      case 'CHOOSE': {
        return {
          ...state,
          types:payload,
        };
      }
      case 'CHANGETYPE': {
        return {
          ...state,
          number:payload,
        };
      }
      case 'CHANGEVIEW': {
        return {
          ...state,
          view:payload,
        };
      }
      case 'CHANGEITEM': {
        return {
          ...state,
          item:state.item+payload,
        };
      }
      case 'CHANGEHEIGHT': {
        return {
          ...state,
          height:payload,
        }
      }
  
     
      default:
        return state;
    }
  };
  
  export default reducer;