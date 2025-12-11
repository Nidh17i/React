



import CallbackCounter from './hooks/usecallback/CallbackCounter'
//import Counter, { HeaveyCal } from './hooks/usememo/Counter'

function App() {
 

  return (
    <>
      {/* <Counter HeaveyCal={HeaveyCal}/> */}
      <CallbackCounter />
   
    </>
  )
}

export default App


// App.jsx




// import CallbackCounter from './hooks/usecallback/CallbackCounter'
// //import Counter, { HeaveyCal } from './hooks/usememo/Counter'

// function App() {
 

//   return (
//     <>
//       {/* <Counter HeaveyCal={HeaveyCal}/> */}
//       <CallbackCounter />
   
//     </>
//   )
// }

// export default App
// // callbackcounter import React, { useState } from 'react'
// import Child from './Child';

// export default function CallbackCounter({}) {
//     const[count,setCount]=useState(0);
//     function btnClick(){
//         console.log('hii I am btnClick funtion');
        
//     }
//   return (
//     <div>
//        <Child change={btnClick}/>
//         <button onClick={()=>setCount(count+1)}>{count}</button>
//     </div>
//   )
// }
// //child jsximport React from 'react'

// export default function Child(change) {
//     console.log('child render')
//   return (
//     <div>
        
//         <button onClick={onchange}>send</button>
//         </div>
//   )
// }
