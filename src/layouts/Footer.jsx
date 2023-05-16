import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

export default function Footer() {
  return (
    <div>
            <Segment  inverted vertical style={{ margin: '45em 0em 0em', padding: '5em 0em' }}>
      
       

        
        <Icon name='facebook official' size='big' />&nbsp;&nbsp;  <Icon name='twitter' size='big'/>&nbsp;&nbsp;  <Icon name='linkedin' size='big'/> &nbsp;&nbsp; <Icon name='instagram' size='big'/>
        <br/><br/> <br/>
        <List horizontal inverted divided link size='small'>
         
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      
    </Segment>
    </div>
  )
}
