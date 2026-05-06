import React from 'react'
import { useState } from 'react'

export default function UsaStateExample() {

   const[count,setCount]= useState(0);
  return (
    <>
    <p>Total Count  {count} </p>
    <button onClick={() => setCount(count + 1)}>ADD</button>
    <button onClick={() => setCount(count - 1)}>SUBTRACT</button>
    </>
  )
}
