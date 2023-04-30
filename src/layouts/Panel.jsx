import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Input, Label, Menu, Segment } from 'semantic-ui-react'
export default function Panel() {

    const history = useHistory()


    function handleButton() {
        history.push("/addtrip")
    }
    function handleButtonOne() {
        history.push("/trips")
    }
    function handleButtonTwo() {
        history.push("/delete")
    }



  return (
    <div>

    

<Menu pointing floated fluid inverted >
          <Menu.Item position='left'
           
           
          />
          
          <Menu.Item>
          <Button inverted  size="big" onClick={()=>handleButton()}>Uçuş Ekle</Button> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
          <Button inverted  size="big" onClick={()=>handleButtonOne()}>Uçuşlar</Button>  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
          <Button inverted  size="big" onClick={()=>handleButtonTwo()}>Uçuş sil</Button>  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
          </Menu.Item>
         

          <Menu.Item position='right'
           
           
           />
          
        </Menu>

    </div>
  )
}
