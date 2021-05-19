import '../App.css';
import { Link } from "react-router-dom";
import React from "react";
import Fajita from "../fajita.jpg";
import Nacho from "../nachosup.jpg";
import Margarita from "../margarita.jpg";

export default function Meni() {
  return (
    <div className="Meni">
        <Link to="/" id="nazad">Povratak na naslovnu</Link>
        <br></br><br></br>
        <div class="prvi">
          <img src={Fajita} id="hrana"></img>
          <p id="pg">
            <b>FAJITA - 28kn</b><br></br>Vruće fajite punjene svježim povrćem i piletinom. Fajite su jednostavan i ukusan obrok preko noći. Klasični meksički recept, sočna piletina začinjava se, peče i kuha do savršenstva, a zatim se prelije sotiranom paprikom i lukom. Iscijed svježe limete dodaje pun okus, a pileće fajitas poslužuju se s toplim tortiljama i dodacima.</p>
        </div>

        <div class="drugi">
          <img src={Nacho} id="hrana"></img>
          <p id="pg"><b>NACHO SUPREME - 34kn</b><br></br>Jesti nachos je slično nalik lijepom, dugačkom priručniku. Ali što se tiče Nachos Supreme, vrijedi.

Ostani s nama ovdje. Vidite, cijelo nacho iskustvo odnosi se na to da ostanete dosljedni od početka do kraja. Ako ste veteran nacho jedač poput nas, znate da nažalost nije svaki čip jednak. Iako Nachos Supreme® ima začinjenu govedinu, umak od nacho sira, prženi grah, rajčicu narezanu na kockice i kiselo vrhnje sa smanjenom masnoćom, većina te dobrote nalazi se na vrhu. Prvi sloj čipsa od tortilje dobiva prilično ozbiljno lijevanje, ali čips na dnu pomalo je na suhoj strani.</p>
        </div>
        <div class="treci">
          <img src={Margarita} id="hrana"></img>
          <p id="pg"><b>MARGARITA - 26kn</b><br></br>Kombinirajući mrvicu limete i slatkoću likera od naranče s prepoznatljivom snagom tekile, klasična Margarita pogađa sve prave</p>
        </div>
    </div>
  );
}