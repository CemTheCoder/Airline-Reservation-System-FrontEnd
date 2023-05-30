import React, { useState } from "react";

import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Button, Container, Icon, Image, Label, Menu, Segment } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function Navi() {

  const [isAuthenticate, setAuthenticate] = useState(true)

const history = useHistory();

 function handleSignIn() {
  setAuthenticate(true)
  history.push("/auth")
}

function handleSignOut() {
  setAuthenticate(false)
  localStorage.clear()
  history.push("/")
  history.go(0)

}
function handleTicketsButton() {
  history.push("/tickets")
}
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Container>
          <Menu.Item position="left">
          <Image src='https://media.istockphoto.com/id/178488809/photo/wings.jpg?s=612x612&w=0&k=20&c=F2jXGWRvrlI1y7u94hVT4FTyW2phNz2nv3mTvTM1P40=' href="/"   size='tiny'  />
            <Label color="black" size="massive" icon>IKARUS &nbsp;  AIRLINES</Label>
            
          </Menu.Item>

          
          <Menu.Item>
          <Label inverted color="black" size="big" >Hizmetler</Label>  &nbsp; &nbsp;
          <Label inverted color="black" size="big" >Kampanyalar</Label>  &nbsp; &nbsp; 
          <Label inverted color="black" size="big" onClick={() => handleTicketsButton()} >Biletlerim</Label>  &nbsp; &nbsp;
          </Menu.Item>
         
          <Menu.Item position="right">
               {localStorage.getItem("currentUser") != null?<SignedIn  signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn}/>}  
            </Menu.Item>
            </Container>
        </Menu>
      </Segment>
    </div>
  )
}
