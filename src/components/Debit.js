import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Debit(){
  
  const navigate = useNavigate();
  
  const { info, setInfo } = useContext(UserContext);
  console.log(info)

  const[form, setForm] = useState({
    amount: '',
    description: ''
  })

  function axiosPost(){
    const token = info.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
      }
    }
    const promise = axios.post("http://localhost:5000/debit", form, config)
    promise.then(res => {
      alert("inserido com sucesso")
      navigate('/home')
    })
  }

  return( 
    <LoginPage>
    <Header>
      <h1>Nova Saída</h1>
    </Header>
      <Form>
        <input type="number" value={form.amount} placeholder='Valor' onChange={e => setForm({...form, amount: e.target.value})} required/>
        <input type="text" value={form.description} placeholder='Descrição' onChange={e => setForm({...form, description: e.target.value})} required/>
      </Form>
      <button onClick={axiosPost}>Salvar saída</button>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  min-width: 375px;
  width: 100%;
  min-height: 665px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: purple;

  button{
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin-top: 6px;
    margin: 0 auto;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: #A328D6;
    color: ${props => props.loading ? "#F2F2F2F" : "#FFFFFF"};
  }
`

const Header = styled.div`
  margin-left: 1.35rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  h1{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;;
    font-size: 1.625rem;
    color: white;
  }
  
`

const Form = styled.form`
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    outline: none;
    transition: 0.5s;
    padding-left: 10px;
    border-radius: 4px;
    font-family: 'Raleway', sans-serif;
    font-size: 1.25rem;
    width: 326px;
    height: 58px;
    row-gap: 6px;
    margin-bottom: 6px;
    border: 1px solid #D4D4D4;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: black;
  }
}

`