import React from 'react'
import { useState } from 'react';
import { use } from 'react';

export default function FormExam() {

    const [name, setName] = useState("");


    const handlesubmit = (e) =>{
        e.preventDefault();
        
         if (name.trim() === "") {
            alert("Please enter your name");
            return;
          }
          else{
            alert(`Hello, ${name}!`);
              setName("");
          }
        
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
