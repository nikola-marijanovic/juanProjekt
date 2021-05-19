import '../App.css';
import { Link } from "react-router-dom";
import React from "react";
import Majica from "../majica.jpg";
import Mug from "../mug.jpg";

export default function Merch() {

  const majica={
    boja:'crna',
    materijal:'pamuk',
    marka:'lokalna',
    import:'da',
    opis:'Lightweight, Classic fit, Double-needle sleeve',
    cijena:140,
  }

 const casa={
   ml:' 11oz (325ml)',
   diametar:'8.1cm, bez ručke',
   materijal:'keramička čaša',
   cijena:200,
  }



  return (
    <div className="Merch">
         <Link to="/" id="nazad">Povratak na naslovnu</Link>
      <div class="majica">
        <img src={Majica} width="500px"></img>
        <h2> Juan majica - {majica.cijena} kn</h2>
        Boja: {majica.boja},<br></br>
        Materijal: {majica.materijal},<br></br>
        Marka:{majica.marka},<br></br>
        Imporirana:{majica.import},<br></br>
        {majica.opis}
        <br></br>
        Dostupne veličine: <select>
          <option>S</option>
          <option>M</option>
          <option>XL</option>
        </select><br></br>
<input type="submit" value="NARUČI" onClick={dodaj} />
<br></br>
<a href="https://www.amazon.com/Juan-Meme-Horse-Balcony-T-Shirt/dp/B08L91W28H?customId=B0752XJYNL&th=1">NARUČI NA ORIGINALNOJ STRANICI</a>
      </div>


      <div class="mug">
        <img src={Mug} width="500px"></img>
        <h2>Juan mug - {casa.cijena} kn</h2>
        Prostor: {casa.ml}, <br></br>
        Dijametar: {casa.diametar}, <br></br>
        Materijal: {casa.materijal}<br></br>
        <input type="submit" value="NARUČI" onClick={dodaj2}/>
        <br></br>
        <a href="https://www.redbubble.com/i/mug/Juan-horse-on-balcony-by-TheH3rbinator/63209255.9Q0AD">NARUČI NA ORIGINALNOJ STRANICI</a>
      </div>

<p id="iznos"></p>
    </div>
  );
}
let ukupno = 0;


const dodaj = () => {
  ukupno = ukupno + 140;
  document.getElementById("iznos").innerHTML="Ukupna cijena iznosi "+ ukupno+ " kn";
  
}

const dodaj2 = () => {
  ukupno = ukupno + 200;
  document.getElementById("iznos").innerHTML="Ukupna cijena iznosi "+ ukupno+ " kn";
}