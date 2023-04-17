import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function AuthRegister() {

    const history = useHistory()

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onNameChange = e => setName(e.target.value);

  const onSurnameChange = e => setSurname(e.target.value);

  const onEmailChange = e  => setEmail(e.target.value);

  const onPasswordChange = e => setPassword(e.target.value);

  function handleButton() {
    axios
    .post("http://localhost:8081/auth/register", {
      name:name,
      surname:surname,  
      email: email,
      password: password

    })
    .then((response) => {
     
      history.push("/auth")
      history.go();
      
    }).catch((err) => console.log(err))

    
  }


  return (
    <div>

<Grid textAlign='center' style={{ height: '100vh' }} >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            
Ikarus Airlines'a  ücretsiz katılın, ayrıcalıklar dünyasından siz de yararlanın
          </Header>
          <Form size='large'>
            <Segment stacked>
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Ad'
                type='name'

                name="name" value={name}
                onChange={onNameChange} required
              />
               <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Soyad'
                type='surname'

                name="surname" value={surname}
                onChange={onSurnameChange} required
              />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-posta' id='email'
                name="email" value={email}
                onChange={onEmailChange} required />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Şifre'
                type='password'

                name="password" value={password}
                onChange={onPasswordChange} required
              />

              <Button color='black' fluid size='large' type='button' onClick={() => handleButton()}>
                Üye Ol
              </Button>
            </Segment>
          </Form>
          <Message>
            Zaten üye misin? <a href='/auth'>Giriş Yap</a>
          </Message>
        </Grid.Column>
      </Grid>



    </div>
  )
}
