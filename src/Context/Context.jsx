import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducers";



const DentistaStates = createContext();

const initialState = {
    users: [],
    favoritos:  JSON.parse(localStorage.getItem('favoritos')) || [],
    theme: 'light'
}
const Context = ({children})=>{      
    const [state, dispatch] = useReducer(reducer, initialState)   
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
      axios(url)
      .then((res)=>  dispatch({type: "GET_DENTISTAS", payload: res.data}))        
      .catch((err)=> console.log(err))
    }, []) 
    return(    
        <DentistaStates.Provider value={{state, dispatch}}>
            {children} 
        </DentistaStates.Provider>
    )
}

export default Context;

export const useDentistaState = ()=>{
    return useContext(DentistaStates)
}