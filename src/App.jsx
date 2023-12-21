import { useState } from 'react'
import './App.css'
import CandidateDetails from './components/Landingpage'
import CalculateBmi from './components/CalculateBMI'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
   <>
     <HashRouter>
      <Routes>
        <Route path='/' element={<CandidateDetails/>}/>
        <Route path='/calculateBmi' element={<CalculateBmi/>}/>
      </Routes>
    </HashRouter>
   </>
  )
}

export default App
