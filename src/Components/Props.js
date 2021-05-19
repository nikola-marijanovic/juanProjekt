import React from "react";

export default function DijeteProps({Kontakt}){

    return(
        <div class="Dijete">

            Adresa:{Kontakt.adresa}<br></br>
            Kontakt:{Kontakt.broj}<br></br>
            Email:{Kontakt.email}<br></br>
        </div>
    )
}