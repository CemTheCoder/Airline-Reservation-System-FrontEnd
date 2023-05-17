import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Item , Icon , Label, Segment, Statistic, Button } from 'semantic-ui-react'

export default function Trips() {

  const history = useHistory()

  const [trips, setTrips] = useState([])

  const takeoff = localStorage.getItem("takeoff")
  const destination = localStorage.getItem("destination")
  const start = localStorage.getItem("start")
  const end = localStorage.getItem("end")


  useState(() => {
    axios
      .get("http://localhost:8081/tripsby?takeOffPoint="+takeoff+"&destination="+destination+"&takeOffTime="+start)
      .then(res => {
        setTrips(res.data)
        
      })
      .catch(err => {
        console.log(err)
      })



  }, [])

  function handleButton() {
    history.push("/search/second")
  }



  return (
    <div>
        <h1>Konforlu &nbsp; Uçuşlar&nbsp;,&nbsp; Güvenli&nbsp; Seyahatler&nbsp;</h1>

<br/>
<br/>

        <Item.Group divided>
   {trips.map(trip => (
     <Item >
     <Statistic.Group >
       <Statistic> 
         <Statistic.Value>{trip.takeOffPoint}</Statistic.Value>
         <Statistic.Label>{trip.start}</Statistic.Label>
       </Statistic>
       <Statistic>
         <Statistic.Value>&nbsp;  <Icon   size='small' name='long arrow alternate right'/> &nbsp;  </Statistic.Value>
        
       </Statistic>
       <Statistic>
         <Statistic.Value>{trip.destination}</Statistic.Value>
         <Statistic.Label>{trip.end}</Statistic.Label>
       </Statistic>
       <Statistic>
         <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp;{trip.price}  <Icon   size='small' name='lira sign'/> </Statistic.Value>
         <Statistic.Label></Statistic.Label>
       </Statistic>
       <Statistic>
         <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={()=>handleButton()}  color='black'  size='medium'>Seç</Button></Statistic.Value>
         
       </Statistic>
     </Statistic.Group>
     </Item>
   ))}       
  </Item.Group>

    </div>
  )
}
