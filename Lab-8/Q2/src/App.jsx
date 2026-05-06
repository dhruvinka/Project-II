import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UsaStateExample from './Components/UsaStateExample'
import UseEffactExam from './Components/UseEffactExam'
import FormExam from './Components/FormExam'
import MultipleItemI from './Components/MultipleItemI'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <nav>
      <Link to="/" >Form Example</Link> | { "  "  }
      <Link to="/multiple" >Multiple Item Example</Link> | { "  "  }
      <Link to="/useeffect" >useEffect Example</Link> | { "  "  }
      <Link to="/usestate" >useState Example</Link> | { "  "  }
    </nav>

  <Routes>
    <Route path="/" element={<FormExam />} />  
    <Route path="/multiple" element={<MultipleItemI />} />
    <Route path="/useeffect" element={<UseEffactExam />} />
    <Route path="/usestate" element={<UsaStateExample />} />

  </Routes>
    </>
  )
}

export default App
