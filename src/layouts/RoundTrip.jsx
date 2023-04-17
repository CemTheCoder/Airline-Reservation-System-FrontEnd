
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Button, Card, Image,Tab ,Dropdown} from 'semantic-ui-react'
import axios from 'axios';


export default function RoundTrip() {

    const [cities, setCities] = useState([])
    const [takeOff, setTakeOff] = useState("")
    const [destination, setDestination] = useState({})

    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);
    
    console.log(currentDate)

    const [currentDateTwo, setNewDateTwo] = useState(null);
    const onChangeTwo = (event, data) => setNewDateTwo(data.value);
    console.log(currentDateTwo)


    const history = useHistory()
   
  

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
  
    
    


    const options =  cities.map(city => (  
      { key: city.id, text: city.nameOfCity, value: city.nameOfCity } 
      )) 
      
    

      function oneTakeOffChange(e,data) {
        console.log(data.value);
        setTakeOff(data.value);
        console.log(currentDate)
        console.log(currentDateTwo)
      }

      function onDestinationChange(e,data) {
        console.log(data.value);
        setDestination(data.value);
      };

      function handleButton() {
        localStorage.setItem("takeoff",takeOff)
        localStorage.setItem("destination",destination)
        localStorage.setItem("start",currentDate)
        localStorage.setItem("end",currentDateTwo)
       

        history.push("/search")

      }
     
  return (
    <div>

<Card fluid  >
      <Card.Content>
        
        <Card.Header>En Ucuz Fiyatlarla Uç!</Card.Header>
       
        <Card.Description>
          <div> <Dropdown onChange={(e,data) =>oneTakeOffChange(e,data)} options={options}  placeholder='Nereden'  search selection  /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   <Dropdown onChange={(e,data) =>onDestinationChange(e,data)} options={options} placeholder='Nereye'  search selection  />  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   <SemanticDatepicker inverted onChange={onChange} />  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <SemanticDatepicker inverted onChange={onChangeTwo} /> </div>
         
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
          <Button color='black' onClick={()=>handleButton()}>
            Uçuş Ara
          </Button>
         
      </Card.Content>
    </Card>
    </div>
  )
}
