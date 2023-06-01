import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { Button, Form, Grid, Header, Image, Input, Message, Segment } from 'semantic-ui-react'

export default function Auth() {
  const [email, setEmail] = useState("")
  const [validateEmail, setValidateEmail] = useState(true)
  const [password, setPassword] = useState("")

  const history = useHistory()


  const onemailchange = e => setEmail(e.target.value);

  const onpasswordchange = e => setPassword(e.target.value);



  function handleButton() {
    axios
      .post("http://localhost:8081/auth/login", {
        email: email,
        password: password
      })
      .then((response) => {
        localStorage.setItem("tokenKey", response.data.message);
        localStorage.setItem("roleId", response.data.roleId)
        localStorage.setItem("currentUser", response.data.userId);
        localStorage.setItem("email", email)
        console.log(localStorage)
        history.push("/")
        history.go();

      }).catch((err) =>
        
        setValidateEmail(false),
        console.log(validateEmail)
      )

    setEmail("")
    setPassword("")
    setValidateEmail(true)
  }

  return (
    <div>

      <Grid textAlign='center' style={{ height: '100vh' }} >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            Hesabına Giriş Yap
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-posta' id='email'
                name="email" value={email}
                onChange={onemailchange}  
              
                 />
     
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Şifre'
                type='password'

                name="password" value={password}
                onChange={onpasswordchange} required
              />

              {validateEmail == false?<Message color='red'>Şifre veya E-posta Yanlış</Message> : "" }

              <Button color='black' fluid size='large' type='button' onClick={() => handleButton()}>
                Giriş Yap
              </Button>
            </Segment>
          </Form>
          <Message>
            Aramızda yeni misin? <a href='/register'>Üye Ol</a>
          </Message>
        </Grid.Column>
      </Grid>


    </div>
  )
}
