import { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogView from "./DogView";

const API = "http://localhost:3001/pups";

function App() {

  const [ dogs, setDogs ] = useState( [] );
  const [ currentDog, setCurrentDog ] = useState( {} );
  const [ filterStatus, setFilterStatus ] = useState( false );

  useEffect( () => {
    fetch( API ).then( response => response.json() ).then( setDogs );
  }, [] );

  // console.log( filterStatus );

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={ () => setFilterStatus( filterStatus => !filterStatus ) }>
          Filter good dogs: { filterStatus ? "ON" : "OFF" }
        </button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={ dogs.filter( dog => filterStatus ? dog.isGoodDog === true : true ) } setCurrentDog={ setCurrentDog }/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogView
          dogs={ dogs }
          setDogs={ setDogs }
          currentDog={ currentDog }
          setCurrentDog={ setCurrentDog }
          apiUrl={ API }
        />
      </div>
    </div>
  );

}

export default App;
