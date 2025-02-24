import React, { createContext, useReducer ,useContext} from 'react'
 
const CardStateContext=createContext()
const CardDispatchContext=createContext()
const reducer=( state,action)=>{
  switch(action.type) {
    case "ADD" :
      return  [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price}]
     
      case "REMOVE":
      let newArr=[...state]
      newArr.slice(action.index,1)
      return newArr;

      default:
        console.log("error in reducer");

  }

}
export const CardProvider=({children})=>{
  const[state,dispatch]=useReducer(reducer,[])
  return(
<CardDispatchContext.Provider value={dispatch}>
  <CardStateContext.Provider value={state}>
     {children}
  </CardStateContext.Provider>
</CardDispatchContext.Provider>
  )
}
 
export const useCart =()=> useContext (CardStateContext)
export const useDispatchCart =()=> useContext(CardDispatchContext)
