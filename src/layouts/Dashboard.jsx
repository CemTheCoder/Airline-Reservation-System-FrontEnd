import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router";
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import AuthRegister from '../pages/AuthRegister';
import TripsRoundFirst from '../pages/TripsRoundFirst';
import TripsOneWay from '../pages/TripsOneWay';
import TripAddMain from '../pages/TripAddMain';
import TripsPanel from '../pages/TripsPanel';
import DeletePanel from '../pages/DeletePanel';
import TripsRoundSecond from '../pages/TripsRoundSecond';

import SeatPickerMain from '../pages/SeatPickerMain';
import Sp from '../pages/Sp';
import TicketPreview from '../pages/TicketPreview';
import Payment from '../pages/Payment';
import PaymentRound from '../pages/PaymentRound';
import OneTicketPreview from '../pages/OneTicketPreview';
import SpSecond from '../pages/SpSecond';
import OneSp from '../pages/OneSp';






export default function Dashboard() {
    return (
        <div>
            <Container>
                <Switch>
                    <Grid>
                        <Grid.Row>
                           
                                <Grid.Column width={16}>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Route exact path="/auth">
                                        {<Auth />}
                                    </Route>

                                </Grid.Column>

                                <Grid.Column width={16}>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Route exact path="/register">
                                        {<AuthRegister />}
                                    </Route>

                                </Grid.Column>
                                
                                <Grid.Column width={16}>
                                   
                                    <Route exact path="/">
                                        {<Home />}
                                    </Route>
                                    

                                </Grid.Column>

                                <Grid.Column width={16}>
                                   
                                    <Route exact path="/search">
                                        {<TripsRoundFirst/>}
                                    </Route>

                                </Grid.Column>
                                <Grid.Column width={16}>
                                   
                                    <Route exact path="/search/second">
                                        {<TripsRoundSecond/>}
                                    </Route>

                                </Grid.Column>
                                <Grid.Column width={16}>
                                   
                                   <Route exact path="/oneway">
                                       {<TripsOneWay/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/addtrip">
                                       {<TripAddMain/>}
                                   </Route>

                               </Grid.Column>


                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/trips">
                                       {<TripsPanel/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/delete">
                                       {<DeletePanel/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/seat/solo">
                                       {<OneSp/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/seat">
                                       {<Sp/>}
                                   </Route>

                               </Grid.Column>



                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/seat/second">
                                       {<SpSecond/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/seat2">
                                       {<SeatPickerMain/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/preview">
                                       {<OneTicketPreview/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/preview/round">
                                       {<TicketPreview/>}
                                   </Route>

                               </Grid.Column>


                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/payment">
                                       {<Payment/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/payment/round">
                                       {<PaymentRound/>}
                                   </Route>

                               </Grid.Column>

                              
                         
                        </Grid.Row>
                    </Grid>
                </Switch>
            </Container>
        </div>
    )
}
