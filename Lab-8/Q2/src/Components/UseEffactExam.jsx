import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function UseEffactExam() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
       console.log("Update the vlaue of the count")
    },[count])
  return (
    <>
    <p>Total Count {count}</p>

    <button onClick={()=> setCount(count + 1)}>ADD</button>
    <button onClick={()=> setCount(count - 1)}>SUBTRACT</button>
    
    </>
  )
}
