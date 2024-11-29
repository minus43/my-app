import './App.css';
import React from 'react';
import Mainpage from './components/Mainpage';
import { Route, Routes } from 'react-router';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Mypage from './components/Mypage';
import Titlepage from './components/Titlepage';
import Teampage from './components/Teampage';
import Toolpage from './components/Toolpage';
import URpage from './components/URpage';
import Backpage from './components/Backpage';
import Frontpage from './components/Frontpage';
import Resultpage from './components/Resultpage';

function App() {
  return (
    <Routes>
      <Route path='/main' element={<Mainpage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/title' element={<Titlepage/>}/>
      <Route path='/team' element={<Teampage/>}/>
      <Route path='/tool' element={<Toolpage/>}/>
      <Route path='/ur' element={<URpage/>}/>
      <Route path='back' element={<Backpage/>}/>
      <Route path='front' element={<Frontpage/>}/>
      <Route path='result' element={<Resultpage/>}/>
    </Routes>
  );
}

export default App;
