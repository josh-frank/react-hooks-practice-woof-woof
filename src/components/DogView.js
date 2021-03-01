export default function DogView( { dogs, setDogs, currentDog, setCurrentDog, apiUrl } ) {

    function toggleDogStatus() {
        fetch( `${ apiUrl }/${ currentDog.id }`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( { isGoodDog: !currentDog.isGoodDog } )
        } )
            .then( response => response.json() )
            .then( updatedDog => {
                setCurrentDog( updatedDog );
                const updatedDogs = [ ...dogs ];
                updatedDogs.find( dog => dog.id === currentDog.id ).isGoodDog = updatedDog.isGoodDog;
                setDogs( updatedDogs );
            } );
    }

    return (
        <div id="dog-info">
            <img src={ currentDog.image } alt={ currentDog.name } />
            <h2>{ currentDog.name }</h2>
            <button onClick={ toggleDogStatus }>
                { currentDog.isGoodDog ? "Good" : "Bad" } Dog!
            </button>
        </div>
    );

}