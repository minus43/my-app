import './App.css';
import React from 'react';
import Mainpage from './components/Mainpage';
import { Route, Routes } from 'react-router';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Mypage from './components/Mypage';

function App() {
  return (
    <Routes>
      <Route path='/main' element={<Mainpage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
    </Routes>
  );
}

export default App;
