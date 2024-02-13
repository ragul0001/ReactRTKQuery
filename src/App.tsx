import React from 'react';
import logo from './logo.svg';
import './App.css';
import Apps from '../src/components/Rough';
import Blogs from './components/Blogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rtk from '././Rtk/Content';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apps />}/>
      <Route path="blogs" element={<Blogs />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="rtk" element={<Rtk/>}/>
        {/* // <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
