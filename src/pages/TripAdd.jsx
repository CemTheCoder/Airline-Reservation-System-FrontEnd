
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Button, Card, Image,Segment,Tab } from 'semantic-ui-react'
import RoundTrip from '../layouts/RoundTrip';
import OneWay from '../layouts/OneWay';
import TripAddOne from './TripAddOne';
import TripAddTwo from './TripAddTwo';

export default function TripAdd() {
    const history = useHistory()
  
    console.log(localStorage)

    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);
    console.log(currentDate)

    const panes = [
      { menuItem: 'Tek Yön', render: () => <Tab.Pane> <TripAddOne/> </Tab.Pane> },
      { menuItem: 'Gidiş Dönüş', render: () => <Tab.Pane><TripAddTwo/></Tab.Pane> }
      
    ]


    return (
        <div>
         <Segment secondary >
       <Tab   panes={panes} />
       </Segment>
          

        </div>
    )
}
