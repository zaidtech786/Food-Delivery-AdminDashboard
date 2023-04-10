import {  useEffect, useReducer, useState } from 'react';
import React from 'react';
import {Reducer} from "../Reducers/Reducer"

export const AppContext = React.createContext({});
export const AppProvider = ({children}) => {
    const [icon,setIcon] = useState("Zaid")
    const initialState = {
       admin:[]
   }

   let userInfo = JSON.parse(localStorage.getItem("admin"));
   const [state,dispatch2] = useReducer(Reducer,userInfo);
   
   useEffect( () => {
       localStorage.setItem("admin",JSON.stringify(state))
       console.log(state)
   },[state])
   return <AppContext.Provider value={{...state,icon,setIcon,dispatch2}}>
          {children}
   </AppContext.Provider>
}