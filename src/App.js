import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import Signin from './Components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Shoping from './components/Shoping';











function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Hero' element={<Hero />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        {/* <Route path='/Signin' element={<Signin />}></Route> */}
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Footer' element={<Footer />}></Route>
        <Route path='/marquee' element={<Marquee />}></Route>
        <Route path='Shoping' element={<Shoping />}></Route>



    </Routes >

    </>
  );
}

export default App








