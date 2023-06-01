import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Form, Input, Segment } from 'semantic-ui-react'

export default function CheckIn() {
    const [pnr, setPnr] = useState("")
    const [surname, setSurname] = useState("")

    const history = useHistory()

    const onpnrchange = e => setPnr(e.target.value)
    const onSurnameChange = e => setSurname(e.target.value)


    function handleButton() {
        localStorage.setItem("pnr",pnr) 
        history.push("/check/second")
    }

    return (
        <div>
            <Segment size='massive' >
            <Form>
                <Input size='huge' placeholder='Rezervasyon Kodu(PNR)' id='pnr'
                    name="pnr" value={pnr}
                    onChange={onpnrchange} required /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Input size='huge' placeholder='Yolcunun Soyadı' id='surname'
                    name="surname" value={surname} onChange={onSurnameChange} 
                    required />

<br/><br/><br/>

            <Button size='medium' onClick={() => handleButton()} color='black'>Devam</Button>
            </Form>
            </Segment>
        </div>
    )
}
