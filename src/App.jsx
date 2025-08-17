

import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Search from './pages/Search';
import Details from './pages/Details';
import Nav from './pages/Nav';

function App() {
 

  return (
    <>
          <Nav/>
          <Routes>
            <Route exact path="/" element={<Search/>} />
            <Route path="/movie/:id" element={<Details/>} />
          </Routes>
    </>
  )
}

export default App
