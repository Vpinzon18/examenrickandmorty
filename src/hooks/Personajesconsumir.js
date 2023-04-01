import React, { useEffect, useState } from "react";
import Personajes from "./personajes";


function Personajesconsumir() {

    const [character , setcharacter] = useState([])

    const initialurl = "https://rickandmortyapi.com/api/character";

const fetchcharacters = (url) => {
    fetch(url)
    .then(response => response.json)
    .then(data => setcharacter(data.results))
    .catch(error => console.log(error))
};
    useEffect(() => {
        fetchcharacters(initialurl);

    }, [])
    return(
<>

</>
    );
}

export default Personajesconsumir;