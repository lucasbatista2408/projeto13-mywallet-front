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
    const token = info;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
      }
    }
    const promise = axios.get("http://localhost:5000/balance", config)
    promise.then(res => {
      setList(res.data)
      console.log(res.data)
    })
  }

  console.log(list)

  // function RenderBalance(list){
  //   console.log(list)
  //   return list.map((move) => {
  //     return (
  //         <Balance>
  //             <p>{move.date}</p>
  //             <p>{move.description}</p>
  //             {move.type === "credit" ? (
  //                 <p style={{ color: "green" }}>{move.amount}</p>
  //             ) : (
  //                 <p style={{ color: "red" }}>{move.amount}</p>
  //             )}
  //         </Balance>
  //     );
  // }
  // )
  // }

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
        <h1>Olá, Fulano!</h1>
        <ion-icon onClick={HandleLogOut} name="exit-outline"></ion-icon>
      </UserAndOut>
      <Registry>
      {list.length === 0 ? <h1>Não há registros de <br/> entrada ou saida</h1> 
      :
      list.map((move) =>
        <Balance>
          <p>{move.date}</p>
          <p>{move.description}</p>
          {move.type === "credit" ? (
              <p style={{ color: "green" }}>{move.amount}</p>
          ) : (
              <p style={{ color: "red" }}>{move.amount}</p>
          )}
        </Balance>
      )}
      </Registry>
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

const Balance = styled.div`
  p{
    font-family: 'Raleway', sans-serif;
  }
`