import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Button, Card, Image, Tab, Dropdown, Form, Segment, FormInput, Input } from 'semantic-ui-react'
import axios from 'axios';

export default function TripAddOne() {
    const [price, setprice] = useState("");
    const [cities, setCities] = useState([])
    const [takeOff, setTakeOff] = useState("")
    const [destination, setDestination] = useState({})
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [name, setName] = useState("")

    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);

    console.log(currentDate)

   
 

    const history = useHistory()


   const onStartChange = e => setStart(e.target.value);
   const onEndChange = e => setEnd(e.target.value);
    

    useState(() => {
        axios
            .get("http://localhost:8081/cities")
            .then(res => {
                setCities(res.data)

            })
            .catch(err => {
                console.log(err)
            })



    }, [])





    const options = cities.map(city => (
        { key: city.id, text: city.nameOfCity, value: city.nameOfCity }
    ))

   


  

    function oneTakeOffChange(e, data) {
        console.log(data.value);
        setTakeOff(data.value);
        console.log(currentDate)
       
    }

    function onDestinationChange(e, data) {
        console.log(data.value);
        setDestination(data.value);
    };

    

    const onPriceChange = e => setprice(e.target.value);
    const onNameChange = e => setName(e.target.value);

    function handleButton() {
  
        axios
    .post("http://localhost:8081/trip?takeoff="+takeOff+"&destination="+destination+"&takeOffTime="+currentDate+"&price="+price+"&start="+start+"&end="+end+"&name="+name)
    .then((response) => {
     console.log(response)
      history.push("/")
      history.go();
      
    }).catch((err) => console.log(err))



    }
 

  return (
    <div>

{localStorage.getItem("roleId") != 1? "You have not permission in this page" :  <Segment >
                <br /><br />
                <Form>

                <Input placeholder='Uçuş Kodu' id='name'
                        name="name" value={name}
                        onChange={onNameChange} required />
                    <br /><br />
                   
                    <Dropdown onChange={(e, data) => oneTakeOffChange(e, data)} options={options} placeholder='Nereden' search selection />
                    <br /><br />
                    <Dropdown onChange={(e, data) => onDestinationChange(e, data)} options={options} placeholder='Nereye' search selection />
                    <br /><br />
                    <SemanticDatepicker  placeholder={"Kalkış Zamanı"}  inverted onChange={onChange} />
                    <br /><br />
                   
                    <Input placeholder='Kalkış Saati' id='start'
                        name="start" value={start}
                        onChange={onStartChange} required />
                    <br /><br />
                    <Input placeholder='Varış Saati' id='end'
                        name="end" value={end}
                        onChange={onEndChange} required />
                    <br /><br />

                  

                   
                    <Input placeholder='Fiyat' id='price'
                        name="price" value={price}
                        onChange={onPriceChange} required />
                    <br /><br />

                    
                    <Button color='black' onClick={() => handleButton()} >Uçuş Ekle</Button>
                </Form>
                <br /><br />
                </Segment>
 }
    </div>
  )
}
