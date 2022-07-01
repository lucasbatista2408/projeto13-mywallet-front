import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Home from "./components/Home.js"
import Credit from "./components/Credit.js"
import Debit from "./components/Debit.js"

function App(){

  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/credit' element={<Credit />}/>
            <Route path='/debit' element={<Debit/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;