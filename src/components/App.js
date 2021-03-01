import { useState, useEffect } from "react";
import DogBar from "./DogBar";

const API = "http://localhost:3001/pups";

function App() {

  const [ dogs, setDogs ] = useState( [] );
  const [ currentDog, setCurrentDog ] = useState( {} );

  useEffect( () => {
    fetch( API ).then( response => response.json() ).then( setDogs );
  }, [] );

  console.log( currentDog );

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={ dogs } setCurrentDog={ setCurrentDog }/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );

}

export default App;
