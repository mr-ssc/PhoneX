import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Container/Home';
import Navbar from './Container/Navbar';
import Signin from './Container/Signin';










function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Signin' element={<Signin />}></Route>




      </Routes>

    </>
  );
}

export default App