import React from "react";
import "./Projet/Projet.css";
import Projet1 from "./Projet/Projet1";
import Projet2 from "./Projet/Projet2";
import Projet3 from "./Projet/Projet3";
import Projet4 from "./Projet/Projet4";

function Projet(){
    return <div  id="projects">
       
    <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        <Projet1 />
        <Projet2 />
        <Projet3 />
        <Projet4 />
      </div>

    </div>
}

export default Projet;