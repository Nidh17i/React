import React, { useState } from 'react';
const MouseHover=()=>{
    const [Hover,setMouseHover]=useState('pink');
    

    function HandleMouseHover(){
        setMouseHover('orange');
    }
    function HandleMouseHoverRe(){
        setMouseHover('purple');
    }
    return (
        <div onMouseEnter={HandleMouseHover} 
        onMouseLeave={HandleMouseHoverRe}
        style={{backgroundColor:Hover,height:'50vh',width:'500px',marginBottom:'5px',textAlign:'center',padding:'50px'}}>
           Hover Me
            </div>
    )
}


export const AutoHideNotification = () => {
  const [notification, setNotification] = useState(false);

  function BtnClick() {
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  }

  return (
    <>
      <button onClick={BtnClick}>Show Notification</button>
      {notification && <div>This is a Notification</div>}
    </>
  );
};





// **6. Click Counter with Reset**

// * Show a number starting at `0`.
// * Each time a button is clicked, increase the number by 1.
// * After **10 seconds**, automatically reset the counter to 0.



export const CounterReset=()=>{
    const [count,setCount]=useState(0);
    function Reset(){
      setCount(count+1)
        setTimeout(()=>setCount(0),10000)

    }
    return (
        <>
        <h1>count:{count}</h1>
        <button onClick={Reset}>Click Btn</button>
        <p>After 10s Count Restart</p>
        </>
    )
     
}

export default MouseHover;
