import React from 'react'
import { useCounter } from './useCounter';

export default function Counter1() {
    const[count,Increment,Decrement]=useCounter();

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={Increment}>Inc</button>
    <button onClick={Decrement}>Dec</button>
    </div>
  )
}
