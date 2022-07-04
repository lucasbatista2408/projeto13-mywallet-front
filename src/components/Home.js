import styled from "styled-components"
import React, {useContext, useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import UserContext from "../contexts/UserContext";


export default function Home(){

  const { info } = useContext(UserContext);
  const [list, setList] = useState('')
  console.log(info)

  const navigate = useNavigate();

  useEffect(() => {
    axiosRequest()
  }, [])

  function axiosRequest(){
    const token = info.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
      }
    }
    const promise = axios.get("https://mywallet-backend-lucasb.herokuapp.com/balance", config)
    promise.then(res => {
      setList(res.data)
      console.log(res.data)
    })
  }

  console.log(list)

  function saldoTotal(list) {
    let saldo = 0;
    list.map(move => {
        if (move.type === "credit") {
            saldo += parseFloat(move.amount);
        } else {
            saldo -= parseFloat(-(move.amount));
        }
    })
    return(<>{
        saldo > 0 ? (
            <p style={{ color: "green" }}>{saldo.toFixed(2)}</p>
        ):(
            <p style={{ color: "red" }}>{saldo.toFixed(2)}</p>
        )
    }</>);
    }

  function HandleClickAdd(){
    navigate ('/credit')
  }
  
  function HandleClickRemove(){
    navigate ('/debit')
  }

  function HandleLogOut(){
    navigate ('/')
  }

  return(
    <HomePage>
      <UserAndOut>
        <h1>Olá, {info.user}!</h1>
        <ion-icon onClick={HandleLogOut} name="exit-outline"></ion-icon>
      </UserAndOut>
      {list.length === 0 ? 
      <Registry>
        <h1>Não há registros de <br/> entrada ou saida</h1>
      </Registry> 
      :
      <BalanceContent>
        <Balance>
          {list.map((move) =>
              <Move>
                <p>{move.date}</p>
                <p>{move.description}</p>
                {move.type === "credit" ? (
                    <p style={{ color: "green" }}>{(move.amount)}</p>
                ) : (
                    <p style={{ color: "red" }}>{(move.amount)}</p>
                )}
              </Move>
          )} 
        </Balance>
      <Saldo>
        <p>Saldo</p>
        <p>{saldoTotal(list)}</p>
      </Saldo>
      </BalanceContent>
      }
      <Bottom>
        <AddButton onClick={HandleClickAdd} >
          <ion-icon name="add-circle-outline"></ion-icon>
          <h1>Nova Entrada</h1>
        </AddButton>
        <RemoveButton onClick={HandleClickRemove}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h1>Nova Saída</h1>
        </RemoveButton>
      </Bottom>
    </HomePage>
  )
}

const HomePage = styled.div`
  min-width: 375px;
  width: 100%;
  min-height: 665px;
  height: 100vh;
  background-color: purple;
`

const UserAndOut = styled.div`
  padding: 24px 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  h1{
  font-size: 1.65rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: white;
  }

  ion-icon{
    color: white;
    font-size: 1.65rem;
  }
  
`

const Registry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  margin-right: 24px;
  width: 326px;
  height: 446px;
  background: white;
  border-radius: 6px;

  h1{ 
  font-family: 'Raleway', sans-serif;
  font-size: 1.25rem;
  color: lightgray;
  text-align: center;
  }
`

const AddButton = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #A328D6;
  width: 9.75rem;
  height: 7.125rem;
  border-radius: 0.375rem;

  h1{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: white;
  }

  ion-icon{
    font-size: 1.375rem;
    color: white;
  }
`

const Bottom = styled.div`
  margin-top: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const RemoveButton = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #A328D6;
  width: 9.75rem;
  height: 7.125rem;
  border-radius: 0.375rem;

  h1{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: white;
  }

  ion-icon{
    font-size: 1.375rem;
    color: white;
  }
`

const BalanceContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 400px;
  border-radius: 6px;
  overflow-y: scroll;
  background-color: white;
`

const Balance = styled.div`

`

const Move = styled.div`
  margin: 0 auto;
  margin-top: 6px;
  width: 90%;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p{
    width: 145px;
    font-size: 16px;
    font-weight: 400;
    color: #000;  
  }
  p:first-child{
    width: 48px;
    color: #c6c6c6;  
  }
  p:last-child{
    width: 62px;
    color: green;
    text-align: end;    
  }
`

const Saldo = styled.div`
  margin: 0 auto;
  margin-bottom: 6px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Raleway', sans-serif;

  p:first-child{
    font-size: 17px;
    font-weight: 700;
    color: black;
  }
  p:last-child{
    font-size: 17px;
    font-weight: 400;
  }
`