import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import { FetchApi } from './components/FetchApi'
import { UserForm } from './components/reduxForm/Redux'

function App() {
 // const [count, setCount] = useState(0)

  return (
   <>
   {/* <Counter1 count={count} setCount={setCount}/>
   <Counter2 count={count} />
   <FetchApi/> */}
   
   <UserForm/>
   </>
  )
}

export default App
