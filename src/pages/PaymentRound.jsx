import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import { Button, Icon, Menu, Table , Input , Form} from 'semantic-ui-react';
import 'react-credit-cards/es/styles-compiled.css'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

export default function PaymentRound() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

   


    let history = useHistory()
  
    let userId = localStorage.getItem("currentUser")

    let seats = localStorage.getItem("seats")

    let seatsSecond = localStorage.getItem("seats2")

    let firstTripId = localStorage.getItem("firstTrip")

    let secondTripId = localStorage.getItem("secondTrip")

    let numOfPassengers = localStorage.getItem("numOfPass")

    let firstPrice = localStorage.getItem("firstPrice")
    
    let secondPrice = localStorage.getItem("secondPrice")

    



    function handleButton() {

      axios
      .post("http://localhost:8081/credit", {
        cardNumber : number, 
        cardName : name,
        date : expiry,
        cvc : cvc,
        userId : userId

      })
      .then((response) => {
       
       console.log(response)

      }).catch((err) => console.log(err))




      axios
      .post("http://localhost:8081/ticket", {
        seatNumbers: seats,
        userId: userId,
        tripId : firstTripId,
        price : firstPrice

      })
      .then((response) => {
       
        console.log(response)

      }).catch((err) => console.log(err))


      axios
      .post("http://localhost:8081/ticket", {
        seatNumbers: seatsSecond,
        userId: userId,
        tripId : secondTripId,
        price : secondPrice
      })
      .then((response) => {
       
       history.push("/success")
       history.go();

      }).catch((err) => console.log(err))


    }

    console.log(localStorage)
  
  return (
    <div>
  <Cards 
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <Form size='big'>
      <br/>
      <br/>
        <Input
          type='tel'
          name='number'
          placeholder='Kart Numarası'
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <br/>
        <br/>
        <Input
          type='text'
          name='name'
          placeholder='Kart Sahibi'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <br/>
        <br/>
        <Input
          type='text'
          name='expiry'
          placeholder='Son Kullanma Tarihi'
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
       {" "}
        <Input
          type='tel'
          name='cvc'
          placeholder='CVC'
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <br/>
        <br/>
        <Button color='black' type="submit" onClick={() => handleButton()} >Devam Et</Button>
      </Form>
    </div>
  )
}
