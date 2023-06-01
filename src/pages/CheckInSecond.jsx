import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'

export default function CheckInSecond() {

    const [ticket, setTicket] = useState({})
    const [trip, setTrip] = useState({})
    const [user, setUser] = useState({})

    const pnr = localStorage.getItem("pnr")


    const history = useHistory()


    useState(() => {
        axios
            .get("http://localhost:8081/ticketpnr?pnr="+pnr)
            .then(res => {
                setTicket(res.data)
                setTrip(res.data.trip)
                setUser(res.data.user)
            })
            .catch(err => {
                console.log(err)
            })



    }, [])








    function handleButton() {
       
        history.push("/success/second")
    }
    return (
        <div>
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
                                            <Statistic.Value>{trip.takeOffPoint}</Statistic.Value>
                                                <Statistic.Label>{trip.start}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>{trip.destination}</Statistic.Value>
                                                <Statistic.Label>{trip.end}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; {trip.price}  <Icon size='small' name='lira sign' /> </Statistic.Value>
                                                <Statistic.Label></Statistic.Label>
                                            </Statistic>

                                        </Statistic.Group>
                                    </Item>







                                </Item.Group>

                            </Item.Header>

                            <br />  <br /> <br />  <br /> <br />
                            <Item.Description ><Segment floated='left'> <Icon name='user' />{user.name} &nbsp;{user.surname}</Segment></Item.Description>
                            <Item.Description ><Segment floated='left'> <Icon name='plane' />{trip.name}</Segment></Item.Description>

                            <Item.Description  >

                                <br /> <br /><br />


                                <Segment floated='left'> <Icon name='suitcase' />15 Kg</Segment>
                                <Segment floated='left'> <Icon name='sign-in alternate' />B42</Segment>
                                <Segment floated='left'> <Icon name='user' />{ticket.seatNumbers}</Segment>





                            </Item.Description>
                            <div style={{ zoom: 1.5 }}>Bilet Fiyatı : {ticket.price}  <Icon size='small' name='lira sign' /></div>

                            <Button size='big' color='black' floated='right' onClick={() => handleButton()}>
                                Bitir
                                <Icon name='right chevron' />
                            </Button>
                        </Item.Content>
                    </Item>


                </Item.Group>
            </Segment>
        </div>
    )
}
