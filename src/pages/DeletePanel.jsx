import React, { useState } from 'react';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function DeletePanel() {

  const [trips, setTrips] = useState([])

  const history = useHistory()


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


  function handleButton(id) {

    axios
      .delete("http://localhost:8081/trip?id=" + id)
      .then(res => {
        console.log(res)
        history.go(0)

      })
      .catch(err => {
        console.log(err)
      })




  }



  return (
    <div>
      {localStorage.getItem("roleId") != 1 ? "You have not permission in this page" : <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell>Kalkış Yeri</Table.HeaderCell>
            <Table.HeaderCell>Varış Yeri</Table.HeaderCell>
            <Table.HeaderCell>Kalkış Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>

          {trips.map(trip => (
            <Table.Row key={trip.id}>


              <Table.Cell>{trip.takeOffPoint}</Table.Cell>
              <Table.Cell>{trip.destination}</Table.Cell>
              <Table.Cell>{trip.takeOffTime}</Table.Cell>
              <Table.Cell>{trip.price}</Table.Cell>
              <Table.Cell><Button color='black' onClick={() => handleButton(trip.id)}>Kaldır</Button></Table.Cell>



            </Table.Row>

          ))}

        </Table.Body>

        <Table.Footer>
          <Table.Row>
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
