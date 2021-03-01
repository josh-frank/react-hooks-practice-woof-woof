import Dog from "./Dog";

export default function DogBar( { dogs, setCurrentDog } ) {

    return dogs.map( dog => <Dog key={ dog.id } dog={ dog } setCurrentDog={ setCurrentDog }/> );

}
