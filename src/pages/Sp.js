import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SeatPicker from "react-seat-picker";
import { Button, Container, Segment , Statistic , Icon , Item} from "semantic-ui-react";
import "./Seat.css"
import axios from "axios";




export default function Sp() {
    const [selected, setSelected] = useState([]);
    const [time, setTime] = useState(0);
    const [first, setFirst] = useState({})
     
    const firstId = localStorage.getItem("firstTrip")
   
    let history = useHistory();

    useState(() => {
      axios
        .get("http://localhost:8081/trip?id="+firstId)
        .then(res => {
          setFirst(res.data)
          
        })
        .catch(err => {
          console.log(err)
        })
  
  
  
    }, [])


    const rows = [
      [
        { id: 1, number: "A1" },
        { id: 2, number: "A2" },
  
        null, 
        { id: 5, number: "A3" },
        { id: 6, number: "A4" },
        null, 
        { id: 5, number: "A5" },
        { id: 6, number: "A6" }
      ],
      [
        { id: 11, number: "B1" },
        { id: 12, number: "B2" },
  
        null,
        { id: 15, number: "B3" },
        { id: 16, number: "B4" },
        null,
        { id: 15, number: "B5" },
        { id: 16, number: "B6" }
      ],
      [
        { id: 21, number: "C1" },
        { id: 22, number: "C2" },
  
        null,
        { id: 25, number: "C3" },
        { id: 26, number: "C4" },
  
        null,
        { id: 25, number: "C5" },
        { id: 26, number: "C6" },
  
      ],
      [
        { id: 11, number: "D1" },
        { id: 12, number: "D2" },
  
        null,
        { id: 15, number: "D3" },
        { id: 16, number: "D4" },
        null,
        { id: 15, number: "D5" },
        { id: 16, number: "D6" }
      ],
      [
        { id: 11, number: "E1" },
        { id: 12, number: "E2" },
  
        null,
        { id: 15, number: "E3" },
        { id: 16, number: "E4" },
        null,
        { id: 15, number: "E5" },
        { id: 16, number: "E6" }
      ],
      [
        { id: 11, number: "F1" },
        { id: 12, number: "F2" },
  
        null,
        { id: 15, number: "F3" },
        { id: 16, number: "F4" },
        null,
        { id: 15, number: "F5" },
        { id: 16, number: "F6" }
      ],
      [
        { id: 11, number: "G1" },
        { id: 12, number: "G2" },
  
        null,
        { id: 15, number: "G3" },
        { id: 16, number: "G4" },
        null,
        { id: 15, number: "G5" },
        { id: 16, number: "G6" }
      ],
      [
        { id: 11, number: "H1" },
        { id: 12, number: "H2" },
  
        null,
        { id: 15, number: "H3" },
        { id: 16, number: "H4" },
        null,
        { id: 15, number: "H5" },
        { id: 16, number: "H6" }
      ],
      [
        { id: 11, number: "I1" },
        { id: 12, number: "I2" },
  
        null,
        { id: 15, number: "I3" },
        { id: 16, number: "I4" },
        null,
        { id: 15, number: "I5" },
        { id: 16, number: "I6" }
      ],
      [
        { id: 11, number: "J1" },
        { id: 12, number: "J2" },
  
        null,
        { id: 15, number: "J3" },
        { id: 16, number: "J4" },
        null,
        { id: 15, number: "J5" },
        { id: 16, number: "J6" }
      ],
      [
        { id: 11, number: "K1" },
        { id: 12, number: "K2" },
  
        null,
        { id: 15, number: "K3" },
        { id: 16, number: "K4" },
        null,
        { id: 15, number: "K5" },
        { id: 16, number: "K6" }
      ],
      [
        { id: 11, number: "L1" },
        { id: 12, number: "L2" },
  
        null,
        { id: 15, number: "L3" },
        { id: 16, number: "L4" },
        null,
        { id: 15, number: "L5" },
        { id: 16, number: "L6" }
      ],
      [
        { id: 11, number: "M1" },
        { id: 12, number: "M2" },
  
        null,
        { id: 15, number: "M3" },
        { id: 16, number: "M4" },
        null,
        { id: 15, number: "M5" },
        { id: 16, number: "M6" }
      ]
    ];
    const price = 30;
    const totalprice = price * selected.length;
    const addSeatCallback = ({ row, number, id }, addCb) => {
      setSelected((prevItems) => [...prevItems, number]);
      const newTooltip = `tooltip for id-${id} added by callback`;
      addCb(row, number, id, newTooltip);
    };
  
    const removeSeatCallback = ({ row, number, id }, removeCb) => {
      setSelected((list) => list.filter((item) => item !== number));
      removeCb(row, number);
    };


    function handleButton() {
      localStorage.setItem("seats",selected.toString())
      console.log(localStorage)
      history.push("/seat/second")
    }
  return (
    <div className="seats" style={{zoom: 1.4 }}>
    
   

   <Segment>
    İlk Bilet İçin Koltuk Seçimi
    <br/><br/>
    <SeatPicker
      addSeatCallback={addSeatCallback}
      removeSeatCallback={removeSeatCallback}
      rows={rows}
      alpha
      maxReservableSeats={localStorage.getItem("numOfPassengers")}
      visible
      color="black"
    />

<br/>
        <Button
         color="black"
          onClick={() => handleButton()}
          size="mini"
        >
          Koltuk Seç
        </Button> 

        </Segment>

        <br/><br/><br/>
  </div>

  )
}
