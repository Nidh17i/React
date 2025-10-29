
import { useState } from "react";

const CharacterCounter=()=>{
    const[char,setChar]=useState('');
    const remaining=100-char.length;
    return(
        <>
        <h2>Character Counter</h2>
        <textarea value={char} onChange={(e)=>setChar(e.target.value)}/>
            <p style={{color: remaining<0 ? "red":'black'}}>Characters left:{remaining}</p>
        </>
    )
}

export function ButtonClick() {
  const [message, setMessage] = useState(""); 

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <p style={{color:'green'}}>{message}</p>
    </>
  );
}

export function HoverBox() {
  const [bgColor, setBgColor] = useState("pink"); 

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: bgColor,
        
      }}
      onMouseEnter={() => setBgColor("green")} // mouse hover
      onMouseLeave={() => setBgColor("gray")}  // mouse leaves
    ></div>
  );
}

export default CharacterCounter;