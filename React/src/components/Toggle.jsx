
import { useState } from "react";

const Toggletheme=()=>{
    const[isDark,setISDark]=useState(false)

function Changetheme(){
    setISDark(!isDark);
}
return (
    <div
    style={{
        backgroundColor:isDark? "black":"White",
        color:isDark?"white":"black",
        height:'100vh',
        
    }}
    >
        <h1>{isDark ? "Dark Mode":"Light Mode"}</h1>
        <button onClick={Changetheme}>Toggle Theme</button>
    </div>
)

}
export default Toggletheme;