import React from "react";

import { Button, Menu, Segment } from 'semantic-ui-react'





export default function Navi() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
            onClick
           
          />
          <Menu.Item
            name='messages'
            
          />
          <Menu.Item
            name='friends'
           
           
          />
        </Menu>
      </Segment>
  </div>
  )
}
