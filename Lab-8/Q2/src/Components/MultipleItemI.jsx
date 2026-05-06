import React from 'react'
import { useState } from 'react'

export default function MultipleItemI() {
    const [FormData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
  return (
    <>
    <div>Form</div>
    <form action="">
        <input type="text" placeholder="Enter your name" value={FormData.name} onChange={(e) => setFormData({...FormData, name: e.target.value})} />
        <input type="email" placeholder="Enter your email" value={FormData.email} onChange={(e) => setFormData({...FormData, email: e.target.value})} />
        <input type="password" placeholder="Enter your password" value={FormData.password} onChange={(e) => setFormData({...FormData, password: e.target.value})} />
        <button type="submit">Submit</button>
    </form>

    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      <tr>
        <td>{FormData.name}</td>
        <td>{FormData.email}</td>
        <td>{FormData.password}</td>
      </tr>
    </table>
    </>
  )
}
