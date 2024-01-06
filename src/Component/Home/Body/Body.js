import React from 'react'
import Bike1 from '../../../Images/Bike1.jpg';
import Bike2 from '../../../Images/Bike2.jpg';
import Bike4 from '../../../Images/Bike4.jpg';
import Bike5 from '../../../Images/Bike5.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import sbody from './Body.module.css'

export default function Body() {
  return (
    <div className='row' style={{backgroundColor:"black"}}>
        <div className='col left'>
        <section id="bike1">
        <div className='wrapper'>
        <img src={Bike1} style={{width:"40vw",height:"50vh"}}/>
        </div>
        </section>
        <section id="bike2">
        <div className='wrapper'>
        <img src={Bike2} style={{width:"40vw",height:"50vh"}}/>
        </div>
        </section>
        <section id="bike4">
        <div className='wrapper'>
        <img src={Bike4} style={{width:"40vw",height:"50vh"}}/>
        </div>
        </section>
        <section id="bike5">
        <div className='wrapper'>
        <img src={Bike5} style={{width:"40vw",height:"50vh"}}/>
        </div>
        </section>
        </div>
        <div className={sbody.scroll}>
            <a href='#bike1' class="active"><h1>jugvjfvg</h1></a>
            <a href='#bike2'><h1>efrdfev</h1></a>
            <a href='#bike4'><h1>efrdfcdv</h1></a>
            <a href='#bike5'><h1>kjkhgfcvb</h1></a>
        </div>
    </div>
  )
}
