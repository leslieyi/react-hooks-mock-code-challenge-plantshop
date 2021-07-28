import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {
  return (
    <ul className="cards">
      {plantData.map(onePlant => 
        <PlantCard key={onePlant.id} onePlant={onePlant}/>
        )}
   
    </ul>
  );
}

export default PlantList;
