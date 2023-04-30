import React, {  useState } from 'react';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';





export default function TripsPanel() {

    const [trips, setTrips] = useState([])


    useState(() => {
        axios
          .get("http://localhost:8081/trips")
          .then(res => {
            setTrips(res.data)
            
          })
          .catch(err => {
            console.log(err)
          })
    
    
    
      }, [])
    

  return (
    <div>

{localStorage.getItem("roleId") != 1? "You have not permission in this page" : <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>Kalkış Yeri</Table.HeaderCell>
            <Table.HeaderCell>Varış Yeri</Table.HeaderCell>
            <Table.HeaderCell>Kalkış Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Dönüş Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Uçuş Tipi</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
           


          </Table.Row>
        </Table.Header>

        <Table.Body>

          {trips.map(trip => (
            <Table.Row key={trip.id}>


              <Table.Cell>{trip.takeOffPoint}</Table.Cell>
              <Table.Cell>{trip.destination}</Table.Cell>
              <Table.Cell>{trip.takeOffTime}</Table.Cell>
              <Table.Cell>{trip.returnTime}</Table.Cell>
              <Table.Cell>{trip.type}</Table.Cell>
              <Table.Cell>{trip.price}</Table.Cell>



            </Table.Row>

          ))}

        </Table.Body>

        <Table.Footer >
          <Table.Row >
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a'>5</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>}
      


    </div>
  )
}
