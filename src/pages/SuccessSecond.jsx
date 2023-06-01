import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react'

export default function SuccessSecond() {
    const history = useHistory()
    function handleButton() {
        history.push("/tickets")
    }

    function handleButtonTwo() {
        history.push("/")
    }
  return (
    <div>
         <Segment textAlign='center'>
               

               <Statistic.Group size='tiny'  >

                   <Statistic color='white' >
                       <Statistic.Value>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHECK-in İŞLEMİNİZ BAŞARIYLA GERÇEKLEŞTİRİLMİŞTİR..</Statistic.Value>
                   </Statistic>


               </Statistic.Group>

           <br/>  <br/>
     
           <Button color='black' onClick={() => handleButton()}>Biletlerim</Button>&nbsp;&nbsp;
           <Button color='black' onClick={() => handleButtonTwo()}>Ana Sayfa</Button>
       </Segment>

    </div>
  )
}
