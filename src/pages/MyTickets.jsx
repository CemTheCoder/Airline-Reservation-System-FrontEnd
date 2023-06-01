import axios from 'axios'
import React, { useState } from 'react'
import { Button, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'
import QRCode from "react-qr-code";

export default function MyTickets() {

  const [tickets, setTickets] = useState([])

  let userId = localStorage.getItem("currentUser")

  useState(() => {
    axios
      .get("http://localhost:8081/ticketske?id=" + userId)
      .then(res => {
        setTickets(res.data)

      })
      .catch(err => {
        console.log(err)
      })



  }, [])


  return (
    <div>

      {tickets.map(ticket => (
        <Segment>
          <Item.Group style={{ zoom: 1 }} >


            <Item  >


              <Item.Content >
                <Item.Image floated='left' style={{ zoom: 1.2 }} avatar src='https://i.hizliresim.com/ruwhtcv.png' />


                <Item.Header as='a'>
                  <br />
                  <br />
                  <br />

                  <Item.Group divided>

                    <Item  >

                      <Statistic.Group size='tiny'  >

                        <Statistic>
                          <Statistic.Value>{ticket.trip.takeOffPoint}</Statistic.Value>
                          <Statistic.Label>{ticket.trip.start}</Statistic.Label>
                        </Statistic>
                        <Statistic>
                          <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                        </Statistic>
                        <Statistic>
                          <Statistic.Value>{ticket.trip.destination}</Statistic.Value>
                          <Statistic.Label>{ticket.trip.end}</Statistic.Label>
                        </Statistic>
                        <Statistic>
                          <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; {ticket.price}  <Icon size='small' name='lira sign' /> </Statistic.Value>
                          <Statistic.Label></Statistic.Label>
                        </Statistic>

                      </Statistic.Group>
                    </Item>




                  </Item.Group>

                </Item.Header>
                <br />
                <Segment basic floated='right'>
                <QRCode
    size={256}
    style={{ zoom: 0.6}}
    value={"https://www.youtube.com/watch?v=_krgcofiM6M"}
    viewBox={`0 0 256 256`}
    />
                </Segment>

                <br />  <br /> <br />  <br /> <br />
                <Item.Description ><Segment floated='left'> <Icon name='user' />{ticket.user.name} &nbsp;{ticket.user.surname} </Segment></Item.Description>
                <Item.Description ><Segment floated='left'> <Icon name='plane' />{ticket.trip.name}</Segment></Item.Description>

                <Item.Description  >

                  <br /> <br /><br />


                  <Segment floated='left'> <Icon name='suitcase' />15 Kg</Segment>
                  <Segment floated='left'> <Icon name='sign-in alternate' />B42</Segment>
                  <Segment floated='left'> <Icon name='user' />{ticket.seatNumbers}</Segment>





                </Item.Description>
                <div style={{ zoom: 1.5 }}>Bilet Fiyatı : {ticket.price}  <Icon size='small' name='lira sign' />
                
                
                
                 </div>


              </Item.Content>
            </Item>


          </Item.Group>
        </Segment>
      ))}
    </div>
  )
}
