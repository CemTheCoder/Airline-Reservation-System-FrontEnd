import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SeatPicker from "react-seat-picker";
import { Button, Container, Segment } from "semantic-ui-react";
import "./Seat.css"




export default function Sp() {
    const [selected, setSelected] = useState([]);
    const [time, setTime] = useState(0);
    let history = useHistory();
    const rows = [
      [
        { id: 1, number: "A1" },
        { id: 2, number: "A2" },
  
        null, 
        { id: 5, number: "A8" },
        { id: 6, number: "A9" }
      ],
      [
        { id: 11, number: "B1" },
        { id: 12, number: "B2" },
  
        null,
        { id: 15, number: "B9" },
        { id: 16, number: "B10" }
      ],
      [
        { id: 21, number: "C1" },
        { id: 22, number: "C2" },
  
        null,
        { id: 25, number: "C9" },
        { id: 26, number: "C10" },
  
        null
      ],
      [
        { id: 11, number: "D1" },
        { id: 12, number: "D2" },
  
        null,
        { id: 15, number: "D9" },
        { id: 16, number: "D10" }
      ],
      [
        { id: 11, number: "E1" },
        { id: 12, number: "E2" },
  
        null,
        { id: 15, number: "E9" },
        { id: 16, number: "E10" }
      ],
      [
        { id: 11, number: "F1" },
        { id: 12, number: "F2" },
  
        null,
        { id: 15, number: "F9" },
        { id: 16, number: "F10" }
      ],
      [
        { id: 11, number: "G1" },
        { id: 12, number: "G2" },
  
        null,
        { id: 15, number: "G9" },
        { id: 16, number: "G10" }
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
      history.push("/payment")
    }
  return (
    <div className="seats" style={{zoom: 1.5 }}>
    

   <Segment>
    <SeatPicker
      addSeatCallback={addSeatCallback}
      removeSeatCallback={removeSeatCallback}
      rows={rows}
      alpha
      maxReservableSeats={2}
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
  </div>

  )
}
