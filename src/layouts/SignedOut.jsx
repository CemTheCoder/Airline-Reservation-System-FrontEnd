import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {

    const history = useHistory()

    function handleButton() {
        history.push("/register")
    }

    return (
        <div>
            <Menu.Item>
               <Button inverted  onClick={signIn} >Giriş yap</Button>
               <Button onClick={handleButton} inverted  style={{marginLeft:'0.5em'}}>Kayıt Ol</Button> 
            </Menu.Item>
            
        </div>
    )
}