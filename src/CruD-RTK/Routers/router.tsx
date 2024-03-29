import React from 'react'
import Add from '../Pages/Add';
import Update from '../Pages/Update';
import View from '../Pages/View';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from '../Pages/Info';
import Design from '../Pages/Design';

function router() {
  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path="/add" element={<Add />}/>
      <Route path="/update/:id" element={<Update />} />
      <Route path="/info/:id" element={<Info/>}/>
     <Route path="/" element={<View/>}/>
     <Route path='/design' element={<Design/>}/>
    </Routes>
  </BrowserRouter>
    </>  
  )
}

export default router