 import React from "react";
import { Parent } from "./components/parent";
import { ControlledCom } from "./components/Controlled";
import { Counter } from "./components/Hooks/UseEffect/Counter";
import { Inc } from "./components/p";

import { ProductCards } from "./components/Card/ProductCard";
import { UseRef } from "./components/Hooks/UseRef/UseRef";
import { Form } from "./components/Hooks/UseState/Registration";
import { RegistrationReact } from "./components/Hooks/UseState/RegistrationReact";
import { LoginForm } from "./components/Hooks/UseState/LoginForm";
import { CleanUp } from "./components/Hooks/UseEffect/CleanUp";
import { UseReducerCounter} from "./components/Hooks/UseReducer/Counter";
import { UseReducerForm } from "./components/Hooks/UseReducer/Form";
import { ContextParent } from "./components/Hooks/UseContext/Parent";
import Counter1 from "./components/Hooks/CustomHook/Counter1";
 export const App=()=>{
    return(
        <div>
            {/* <Parent/> 
            <ControlledCom/>
           <Inc/> 
          <ProductCards/>
           <UseRef/>
       
          <Counter/> 
        <Form/>
        <RegistrationReact/>
        <LoginForm/>
        <CleanUp/>*/}


        {/* <UseReducerCounter/>
        <UseReducerForm/> */}

      <ContextParent/>

      <Counter1/>
         

        </div>
    )
 }