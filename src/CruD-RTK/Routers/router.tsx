import React from 'react'
import Add from '../Pages/Add';
import Update from '../Pages/Update';
import View from '../Pages/View';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from '../Pages/Info';

function router() {
  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path="/add" element={<Add />}/>
      <Route path="/update/:id" element={<Update />} />
      <Route path="/info/:id" element={<Info/>}/>
     <Route path="/" element={<View/>}/>
    </Routes>
  </BrowserRouter>
    </>  
  )
}

export default router