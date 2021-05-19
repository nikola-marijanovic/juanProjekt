import '../App.css';
import { Link } from "react-router-dom";
import React from "react";

export default function Hnl(){
    return(
        
    <div className="Hnl">
   <Link to="/" id="nazad">Povratak na naslovnu</Link>

   <br></br><br></br>
   <h1 id="naslov3">Lokacija</h1>
   
        <div class="lokacija">
          
           <p id="tt">Nalazi se u Dioklecijanovoj palači<br></br>
        Ul. Kraj Svetog Ivana 5, 21000<br></br>
        Split, Hrvatska</p>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46297.99187590923!2d16.43530295925685!3d43.5101685203077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfe3030e3c9%3A0x1d971df0ff365e13!2sTo%20Je%20Tako!5e0!3m2!1sen!2shr!4v1621446565889!5m2!1sen!2shr" width="800" height="350" allowfullscreen="" loading="lazy"></iframe>
        <br></br>
</div>
<div class="pravila">
        <p>Bez rezervacija</p>
        <p>First Come First Served</p>
        <p>MASKA JE OBAVEZNA</p>
        </div>
<br></br>
<hr></hr>
        <h1 id="naslov3">Sati</h1>
        <div class="satnica">
        <p>Utorak - 11-21<br></br>
        Srijeda - 11-21<br></br>
        Cetvrtak - 11-21<br></br>
        Petak - 11-22<br></br>
        Subota - 11-22<br></br>
        </p>
        </div>
</div>

    );
}