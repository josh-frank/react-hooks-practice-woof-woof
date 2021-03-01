export default function Dog( { dog, setCurrentDog } ) {

    return <span onClick={ () => setCurrentDog( dog ) }>{ dog.name }</span>;

}