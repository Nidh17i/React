 import React from "react";
import { Parent } from "./components/parent";
import { ControlledCom } from "./components/Controlled";
import { Counter } from "./components/Hooks/UseEffect";
import { Inc } from "./components/p";

import { ProductCards } from "./components/Card/ProductCard";
 export const App=()=>{
    return(
        <div>
            {/* <Parent/> 
            <ControlledCom/>
         <Counter/>
         <Inc/> */}
         
        
         <ProductCards/>
         

        </div>
    )
 }