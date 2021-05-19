import '../App.css';
import { Link } from "react-router-dom";
import React from "react";
import Slika3 from "../onama.jpg"
import DijeteProps from './Props';

export default function Onama() {


const kontakt={
  adresa:'Zagrebačka 24',
  broj: "+3852748274",
  email:"juantheboss@gmail.com"
}

  return (
    <div className="Onama">
     <Link to="/" id="nazad">Povratak na naslovnu</Link>
    <h1> "JUAN"</h1>
    <br></br>
    <p id="pismo"> Južno od granica zauzima središnje mjesto u Pechanginoj Cantini iz 1882. godine. Poslužujući marendu i večeru pet dana u tjednu, restoran Juan nudi vrhunska jela iz regija poznatih po odvažnim okusima koji su danas omiljeni u Kaliforniji.<br></br>  Ovaj ležerni restoran pokazuje se savršenim mjestom za druženje s obitelji i prijateljima, gledanje fudbala ili drugih sportova, te za uživanje u osvježavajućoj margariti ili pijuckanje obrtničke tekile.</p>
    <br></br>

    <h2 id="podnaslov">POVIJEST JUANA</h2>
    <p id="pismo">1882. bila je jedna od najvažnijih godina u povijesti Pechanga Banda Luiseño Indijanaca. 27. lipnja 1882. predsjednik Chester A. Arthur izdao je Izvršnu naredbu kojom se ponovno uspostavlja odnos vlade i vlade između Pechange i Sjedinjenih Država i odvaja samo 4000 hektara za indijanski rezervat Pechanga.
<br></br><br></br>
Ljudi Pechanga žive u dolini Temecula od pamtivijeka. Napokon, 30 godina nakon zaključenja Ugovora u selu Temecula, ispunjeno je obećanje o trajnim zemljištima za narod Pechanga. Ugovor iz Temecule dao bi plemenima oko 12 000 četvornih kilometara južne Kalifornije. No kako je zlato otkriveno u Kaliforniji, američki Senat nije ratificirao Ugovor iz Temecule - zajedno sa 17 drugih. Državne akcije dovele su do toga da američki domoroci iz Kalifornije budu pravno istrebljeni, porobljeni i potlačeni. Država Kalifornija prisilno je oduzela milijune hektara zemlje u korist pojedinaca i korporacija.
<br></br><br></br>
Naši su preci podnosili poplave, požare, suše, ekonomsku oskudicu, bolesti i invazije, boreći se za opstanak kako bi osigurali bolji život budućim generacijama. Zahvaljujući njima, svanuo je novi dan u kojem naše Pleme ostvaruje samopouzdanje i zapošljava tisuće Kaliforničara. S pouzdanjem da će naša djeca i unuci sačuvati naš plemenski suverenitet, našu kulturu i tradiciju, radujemo se svijetloj budućnosti.</p>

<br></br>
<img src={Slika3} width="1000px;" height="500px;"></img>
<br></br><br></br>
<DijeteProps Kontakt = {kontakt}></DijeteProps>
<br></br>
    </div>
  );
}