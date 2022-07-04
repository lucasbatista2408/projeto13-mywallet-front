import styled from "styled-components"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Login(){
  
  const { info, setInfo } = useContext(UserContext);

  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  console.log(form)

  const navigate = useNavigate();

  function HandleLogIn(e){
    e.preventDefault();
    const URL = "https://mywallet-backend-lucasb.herokuapp.com/login"
    const infoLogIn = form;
    const promise = axios.post(URL, infoLogIn)
    promise.then(res => { 
      const dados = res.data;
      setInfo(dados)
      console.log(dados)
      navigate('/home')}
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
      <Logo>
        <h1> MyWallet </h1>
      </Logo>
      <Form>
        <input type="text" value={form.email} placeholder='email' onChange={e => setForm({...form, email: e.target.value})} required/>
        <input type="password" value={form.password} placeholder='senha' onChange={e => setForm({...form, password: e.target.value})} required/>
        <button onClick={HandleLogIn} type="submit" >entrar</button>
      </Form>
        <Button onClick={HandleClick}>Primeira vez? Cadastre-se</Button>
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
  align-items: center;
  justify-content: center;
  background-color: purple;

  img{
    margin-bottom: 32px;
  }
`

const Logo = styled.div`
  font-family: 'Saira Stencil One', cursive;
  margin-bottom: 1.5rem;
  h1{
    font-size: 2rem;
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

const Button = styled.button`
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    margin-top: 36px;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: white;
`

