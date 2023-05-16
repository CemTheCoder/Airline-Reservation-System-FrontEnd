import React, { useState } from 'react'
import { Button, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'

export default function TicketPreview() {
    const [trips, setTrips] = useState([])
    return (
        <div>

            
            <Segment>
                <Item.Group style={{ zoom: 1 }} >


                    <Item  >
                       
                       
                        <Item.Content >
                        <Item.Image floated='left'  style={{ zoom: 1 }} avatar src='https://i.hizliresim.com/ruwhtcv.png' />
                       

                            <Item.Header as='a'>
                            <br/>
                                <Item.Group divided>
                                     
                                    <Item  >
                                        
                                        <Statistic.Group size='tiny'  >
                                            
                                            <Statistic>
                                                <Statistic.Value>Ankara</Statistic.Value>
                                                <Statistic.Label>23.00</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>İstanbul</Statistic.Value>
                                                <Statistic.Label>22.00</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; 1500  <Icon size='small' name='lira sign' /> </Statistic.Value>
                                                <Statistic.Label></Statistic.Label>
                                            </Statistic>

                                        </Statistic.Group>
                                    </Item>


                                    <Item  >
                                        <Statistic.Group size='tiny'  >
                                            <Statistic>
                                                <Statistic.Value>Ankara</Statistic.Value>
                                                <Statistic.Label>23.00</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;  <Icon size='small' name='long arrow alternate right' /> &nbsp;  </Statistic.Value>

                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>İstanbul</Statistic.Value>
                                                <Statistic.Label>22.00</Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp; 1500  <Icon size='small' name='lira sign' /> </Statistic.Value>
                                                <Statistic.Label></Statistic.Label>
                                            </Statistic>

                                        </Statistic.Group>
                                    </Item>

                                    

                                </Item.Group>

                            </Item.Header>
                            
                            <br />  <br /> <br /> 
                            <Item.Description ><Segment floated='left'> <Icon name='user' />Cem Erdem</Segment></Item.Description>
                            <Item.Description ><Segment floated='left'> <Icon name='plane' />IAF123</Segment></Item.Description>
                            <Item.Description  >

                                <br /> <br /><br />
                                
                                
                                <Segment floated='left'> <Icon name='suitcase' />15 Kg</Segment>
                                <Segment floated='left'> <Icon name='sign-in alternate' />B42</Segment>
                                <Segment floated='left'> <Icon name='user' />A17 B7</Segment>

                                
                              


                            </Item.Description>
                          <div style={{ zoom: 1.5 }}>Bilet Fiyatı : 3000  <Icon size='small' name='lira sign' /></div> 
                                            
                            <Button color='black' floated='right'>
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
