import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Home from "./components/Home.js"
import Credit from "./components/Credit.js"
import Debit from "./components/Debit.js"
import Balance from "./components/Balance.js"

function App(){

  //const [info, setInfo] = useState({});
  //const [per, setPer] = useState('')
  //const contextValue = {info, setInfo, per, setPer}

  return (
    //<UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/credit' element={<Credit />}/>
            <Route path='/debit' element={<Debit/>}/>
            <Route path='/balance' element={<Balance/>}/>
        </Routes>
      </BrowserRouter>
    //</UserContext.Provider>
  )
}

export default App;