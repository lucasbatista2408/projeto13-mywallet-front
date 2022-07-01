import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";

export default function Debit(){
  
  //const { info, setInfo } = useContext(UserContext);

  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  function HandleLogIn(e){
    e.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const infoLogIn = form;
    const promise = axios.post(URL, infoLogIn)
    promise.then(res => { 
      const dados = res.data;
      //setInfo(dados)
      navigate('/hoje')}
      )

    promise.catch(error => (
      alert("As informações digitadas estão incorretas"),
      window.location.reload(true)
      ))
  }

  function HandleClick(){
    navigate("/cadastro")
  }

  return( 
    <LoginPage>
    <Header>
      <h1>Nova Saída</h1>
    </Header>
      <Form>
        <input type="number" value={form.email} placeholder='Valor' onChange={e => setForm({...form, email: e.target.value})} required/>
        <input type="text" value={form.password} placeholder='Descrição' onChange={e => setForm({...form, password: e.target.value})} required/>
        <button onClick={HandleLogIn} type="submit">Salvar saída</button>
      </Form>
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

  img{
    margin-bottom: 32px;
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

  button{
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin-top: 6px;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: #A328D6;
    color: ${props => props.loading ? "#F2F2F2F" : "#FFFFFF"};
  }
`