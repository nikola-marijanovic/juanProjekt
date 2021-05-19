import '../App.css';
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Slika from "../naslovna.jpg";
import Slika2 from "../hrana1.jpg";

export class Naslovna extends Component{ 
  
  state={
    ime:'',
    lozinka:'',
  }


    onSubmit = e =>{e.preventDefault(); window.alert("Ulogirani ste kao "+ this.state.ime);}
  render()

   {
      return (
    <div>
      <div class="sadrzaj1">
        <img src={Slika} id="naslovna"></img>
      <h1 id="naslov"> RESTORAN JUAN</h1>
      <div class="linkovi">
      <Link to="/Onama" id="botun">O nama   </Link>
      <Link to="/Hnl"  id="botun">   Info   </Link>
      <Link to="/Meni"  id="botun">   Meni   </Link>
      <Link to="/Merch"  id="botun">   MERCH</Link>
      </div>
        <br></br>
      <p id="citat"> "Savor the spice, flavor and aromas of the best food from Mexico, Central and South American countries." </p>


      <div class="forma">
        <h1 id="prijavaa">PRIJAVA</h1>
        <form onSubmit>
          <input placeholder= 'Korisnicko ime' id="imeme" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
      <br></br>
          <input placeholder= 'Lozinka' type="password" value={this.state.lozinka} onChange={e=>this.setState({lozinka: e.target.value})}/> 
        <br></br>
          <button onClick = {e=>this.onSubmit(e)}>POTVRDI</button>
        </form>
      </div>

      <img src={Slika2} id="slikica2"></img>
      </div>
    </div>
  );
}
}

export default Naslovna;