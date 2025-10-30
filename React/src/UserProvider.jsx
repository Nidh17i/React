
import { createContext, useReducer } from "react";

import UserFrom from './UserFrom';

export const UserContext=createContext();

function reducer(state,action){
    switch(action.type){
        case'addUser':{
            return[...state,action.payload];
        }
        case'updateUser':{
          return state
        }
    }
}

export const UserProvider=()=> {
    const[users,dispatch]=useReducer(reducer,[]);

  return (

    <UserContext.Provider value={{users,dispatch}}>
       <UserFrom/>

    </UserContext.Provider>
  )
}
