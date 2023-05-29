import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'

export default function TicketPreview() {
    const [first, setFirst] = useState({})
    const [second, setSecond] = useState({})
    
    const firstId = localStorage.getItem("firstTrip")
    const secondId = localStorage.getItem("secondTrip")
    
    const history = useHistory()

    useState(() => {
        axios
          .get("http://localhost:8081/trip?id="+firstId)
          .then(res => {
            setFirst(res.data)
            
          })
          .catch(err => {
            console.log(err)
          })
    
    
    
      }, [])

      useState(() => {
        axios
          .get("http://localhost:8081/trip?id="+secondId)
          .then(res => {
            setSecond(res.data)
            
          })
          .catch(err => {
            console.log(err)
          })
    
    
    
      }, [])

      console.log(first)
      console.log(second)

      const total = first.price + second.price
    
      function handleButton() {
        history.push("/payment/round")
      }

    return (
        <div>

            
            <Segment>
                <Item.Group style={{ zoom: 1 }} >


                    <Item  >
                       
                       
                        <Item.Content >
                        <Item.Image floated='left'  style={{ zoom: 1.2 }} avatar src='https://i.hizliresim.com/ruwhtcv.png' />
                       

                            <Item.Header as='a'>
                            <br/>
                                <Item.Group divided>
                                     
                                    <Item  >
                                        
                                        <Statistic.Group size='tiny'  >
                                            
                                            <Statistic>
                                                <Statistic.Value>{first.takeOffPoint}</Statistic.Value>
                                                <Statistic.Label>{first.start}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>{first.destination}</Statistic.Value>
                                                <Statistic.Label>{first.end}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; {first.price}  <Icon size='small' name='lira sign' /> </Statistic.Value>
                                                <Statistic.Label></Statistic.Label>
                                            </Statistic>

                                        </Statistic.Group>
                                    </Item>

<br/>
                                    
<Item  >
                                        
                                        <Statistic.Group size='tiny'  >
                                            
                                            <Statistic>
                                                <Statistic.Value>{second.takeOffPoint}</Statistic.Value>
                                                <Statistic.Label>{second.start}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>{second.destination}</Statistic.Value>
                                                <Statistic.Label>{second.end}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; {second.price}  <Icon size='small' name='lira sign' /> </Statistic.Value>
                                                <Statistic.Label></Statistic.Label>
                                            </Statistic>

                                        </Statistic.Group>
                                    </Item>

                                 
                                    

                                </Item.Group>

                            </Item.Header>
                            
                            <br />  <br /> <br />  <br /> 
                            <Item.Description ><Segment floated='left'> <Icon name='user' />Cem Erdem</Segment></Item.Description>
                            <Item.Description ><Segment floated='left'> <Icon name='plane' />{first.name}</Segment></Item.Description>
                            <Item.Description ><Segment floated='left'> <Icon name='plane' />{second.name}</Segment></Item.Description>
                            <Item.Description  >

                                <br /> <br /><br />
                                
                                
                                <Segment floated='left'> <Icon name='suitcase' />15 Kg</Segment>
                                <Segment floated='left'> <Icon name='sign-in alternate' />B42</Segment>
                                <Segment floated='left'> <Icon name='user' />{localStorage.getItem("seats")}</Segment>
                                <Segment floated='left'> <Icon name='user' />{localStorage.getItem("seats2")}</Segment>

                                
                              


                            </Item.Description>
                          <div style={{ zoom: 1.5 }}>Bilet Fiyatı : {total}  <Icon size='small' name='lira sign' /></div> 
                                            
                            <Button color='black' floated='right' onClick={()=>handleButton()}>
                                Satın Al
                                <Icon name='right chevron' />
                            </Button>
                        </Item.Content>
                    </Item>


                </Item.Group>
            </Segment>
        </div>
    )
}
