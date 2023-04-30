import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router";
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import AuthRegister from '../pages/AuthRegister';
import Trips from '../pages/Trips';
import TripsOneWay from '../pages/TripsOneWay';
import TripAdd from '../pages/TripAdd';
import TripsPanel from '../pages/TripsPanel';
import DeletePanel from '../pages/DeletePanel';
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
                                        {<Trips/>}
                                    </Route>

                                </Grid.Column>
                                <Grid.Column width={16}>
                                   
                                   <Route exact path="/oneway">
                                       {<TripsOneWay/>}
                                   </Route>

                               </Grid.Column>

                               <Grid.Column width={16}>
                                   
                                   <Route exact path="/addtrip">
                                       {<TripAdd/>}
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
                         
                        </Grid.Row>
                    </Grid>
                </Switch>
            </Container>
        </div>
    )
}
