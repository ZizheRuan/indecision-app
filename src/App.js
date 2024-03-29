import { useState } from 'react';
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import About from "./components/About";
import {Route, Routes} from "react-router-dom";

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/indecision' element={<Game/>}/>
        <Route path='/indecision/about' element={<About/>}/>
      </Routes>
    </>
  );
}
