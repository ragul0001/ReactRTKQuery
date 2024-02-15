import React from 'react';
import logo from './logo.svg';
import './App.css';
import Apps from '../src/components/Rough';
import Blogs from './components/Blogs';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rtk from '././Rtk/Content';
//CRUD Rtk
import Router from './CruD-RTK/Routers/router';



function App() {
  return (
   <>
         {/* ToDo List */}
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Apps />}/>
            <Route path="blogs" element={<Blogs />} />     
            <Route path="rtk" element={<Rtk/>}/>
          </Routes>
        </BrowserRouter> */}
         {/* CRUD RTK Query */}
       <Router/>
   </>
  );
}

export default App;
