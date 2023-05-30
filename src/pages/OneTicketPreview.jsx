import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'



export default function OneTicketPreview() {
    const [solo, setSolo] = useState({})
   
    
    const soloId = localStorage.getItem("soloTrip")
  
    
    const history = useHistory()

    let numOfPass = localStorage.getItem("numOfPassengers")

    useState(() => {
        axios
          .get("http://localhost:8081/trip?id="+soloId)
          .then(res => {
            setSolo(res.data)
            
          })
          .catch(err => {
            console.log(err)
          })
    
    
    
      }, [])

    

      console.log(solo)
     

     
    
      function handleButton() {
        localStorage.setItem("soloPrice" , solo.price * numOfPass)
        history.push("/payment")
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
                            <br/>
                            <br/>
                            
                                <Item.Group divided>
                                     
                                    <Item  >
                                        
                                        <Statistic.Group size='tiny'  >
                                            
                                            <Statistic>
                                                <Statistic.Value>{solo.takeOffPoint}</Statistic.Value>
                                                <Statistic.Label>{solo.start}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>{solo.destination}</Statistic.Value>
                                                <Statistic.Label>{solo.end}</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; {solo.price * numOfPass}  <Icon size='small' name='lira sign' /> </Statistic.Value>
                                                <Statistic.Label></Statistic.Label>
                                            </Statistic>

                                        </Statistic.Group>
                                    </Item>


                                    

                                </Item.Group>

                            </Item.Header>
                            
                            <br />  <br /> <br />  <br /> <br /> 
                            <Item.Description ><Segment floated='left'> <Icon name='user' />Cem Erdem</Segment></Item.Description>
                            <Item.Description ><Segment floated='left'> <Icon name='plane' />{solo.name}</Segment></Item.Description>
                           
                            <Item.Description  >

                                <br /> <br /><br />
                                
                                
                                <Segment floated='left'> <Icon name='suitcase' />15 Kg</Segment>
                                <Segment floated='left'> <Icon name='sign-in alternate' />B42</Segment>
                                <Segment floated='left'> <Icon name='user' />{localStorage.getItem("seats")}</Segment>

                                
                              


                            </Item.Description>
                          <div style={{ zoom: 1.5 }}>Bilet Fiyatı : {solo.price * numOfPass}  <Icon size='small' name='lira sign' /></div> 
                                            
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
