import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import React, {useState} from "react"
import axios from "axios"

function Cadastro(){

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
  })

  const [pass, setPass] = useState('');

  console.log(form.email)
  console.log(pass)

  const [popup, setPopup] = useState(false)

  const navigate = useNavigate();

  function SignUp(e){
    e.preventDefault();
    setPopup(true)
    console.log('clicked')

    const URL = ""
    const signUp = form;
    const promise = axios.post(URL, signUp)
    promise
    .then( res => {
      console.log(res.data)
      navigate('/')
    })
    .catch(error => 
      (console.log(error),
      alert("Revise as informações digitadas"),
      setPopup(false),
      window.location.reload(true)
      ))
  }

  function HandleConfirmation(e){
    setPass(e.target.value)

    if(pass === form.password){
      
    }
  }

  function HandleLogIn(){
    navigate('/')
  }

  return  (
  <SignIn>
    <Logo>
      <h1> MyWallet </h1>
    </Logo>
    <Form>
      <input type="text" placeholder="Nome" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
      <input type="text" placeholder="E-mail" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
      <input type="password" placeholder="Senha"  value={form.password} onChange={e => setForm({...form, password: e.target.value})} required/>
      <input type="password" placeholder="Confirmar Senha"  value={pass} onChange={e => HandleConfirmation(e)} required/>
      <button onClick={SignUp} disabled>Cadastrar</button>
    </Form>
    <Button onClick={HandleLogIn}>Ja tem uma conta? Entre agora!</Button>
</SignIn>
  )
}

const SignIn = styled.div`
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
  font-family: 'Raleway', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    padding-left: 10px;
    border-radius: 4px;
    font-size: 1.25rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
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
    font-family: 'Raleway', cursive;
    font-weight: 700;
    margin-top: 6px;
    width: 326px;
    height: 46px;
    border: none;
    border-radius: 6px;
    background-color: #A328D6;
    color: white;
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

export default Cadastro;