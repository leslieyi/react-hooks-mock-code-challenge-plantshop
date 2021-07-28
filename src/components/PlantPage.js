import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => {
        setPlantData(plantData);
      });
  }, []);


  //setting state for the user's input
  //the user input is an object that has key/value pair
  const [userInput, setUserInput] = useState({
    name: "",
    image: "",
    price: null
  });
  
  //setting state for submitted form
  //when the page loads, the plantData form must be shown as default.
  const [plantData, setPlantData] = useState([]);
  const [searchInput, setSearchInput] = useState('')

  function handleUserInput(e) {
    //the inputs have names value pair,
    //we need to get the name and value by targetting to the specific input
    //now this new input data needs to be added to the copy of userInput that was set as blank
    //name: value aare key value pair, name is a variable so it needs []
    let name = e.target.name;
    let value = e.target.value;

    console.log(name);
    console.log(value);

    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  function handleForm(e){
    e.preventDefault()

    setPlantData( [userInput, ...plantData] )
    
  }

  // const filteredSortedSearchableHogs = () => {
  //   if (search.length > 0) {
  //     return sortedHogs().filter(hog => {
  //       return hog.name.toLowerCase().includes(search.toLowerCase())
  //     })
  //   } else {
  //     return sortedHogs()
  //   }
  // }

  function handleSearch(e){
  setSearchInput(e.target.value)
}

console.log(searchInput)
//filter here with an array, 
//pass it to plantList componenet
//that way as I am searching it will update the render?
const filteredPlants = plantData.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm handleUserInput={handleUserInput} handleForm={handleForm} />
      <Search handleSearch={handleSearch} />
      <PlantList plantData={filteredPlants} />
    </main>
  );
}

export default PlantPage;
