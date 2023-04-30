import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {

    const [user, setUser] = useState({})

    let id = localStorage.getItem("currentUser");

    useState(() => {
        axios
          .get("http://localhost:8081/user?id="+id)
          .then(res => {
            setUser(res.data)
            
          })
          .catch(err => {
            console.log(err)
          })
    
    
    
      }, [])



    return (
        <div>
            <Menu.Item >
                <Image  avatar size='mini' spaced="right" src="https://dashboard.rtta.rw/public/assets/img/avatar.png"/>
                <Dropdown  pointing="top left" text={user.name}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
