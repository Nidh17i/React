import { MyContext } from "./index";
import { ContextChild } from "./Child";

export const ContextParent=()=>{
    const sharedata='hello i am share data';


    return(
        <div>
            <MyContext.Provider value={sharedata}>
                <ContextChild/>
            </MyContext.Provider>
     
     </div>
       
    )
}