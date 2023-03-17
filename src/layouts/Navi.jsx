import React, { useState } from "react";

import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Button, Container, Icon, Image, Label, Menu, Segment } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";



export default function Navi() {

  const [isAuthenticate, setAuthenticate] = useState(true)

const navigate = useNavigate();

 function handleSignIn() {
  setAuthenticate(true)
  navigate("/")
}

function handleSignOut() {
  setAuthenticate(false)
  navigate("/")
}
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Container>
          <Menu.Item position="left">
          <Image src='https://media.istockphoto.com/id/178488809/photo/wings.jpg?s=612x612&w=0&k=20&c=F2jXGWRvrlI1y7u94hVT4FTyW2phNz2nv3mTvTM1P40='   size='tiny'  />
            <Label color="black" size="massive" icon>IKARUS &nbsp; &nbsp; AIRLINES</Label>
            
          </Menu.Item>

          
          <Menu.Item>
          <Label inverted color="black" size="big" >Hizmetler</Label>  &nbsp; &nbsp;
          <Label inverted color="black" size="big" >Kampanyalar</Label>  &nbsp; &nbsp; 
          <Label inverted color="black" size="big" >Bilet İşlemleri</Label>  &nbsp; &nbsp;
          </Menu.Item>
         
          <Menu.Item position="right">
               {isAuthenticate?<SignedIn  signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn}/>}  
            </Menu.Item>
            </Container>
        </Menu>
      </Segment>
    </div>
  )
}
