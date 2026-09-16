import { useParams } from "react-router-dom";
import "../DogDetails.css";
import { Link } from "react-router-dom"

function DogDetails({ dogs }) {
  const { chipNumber } = useParams();

  const dog = dogs.find(
    (dog) => dog.chipNumber === chipNumber
  );

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dog-details">
      <img className="dog-image" src={dog.img} alt={dog.name} />

      <h1>{dog.name}</h1>

      <p>Ras: {dog.breed}</p>
      <p>Ålder: {dog.age} år</p>
      <p>Kön: {dog.sex}</p>
      <p>Status: {dog.present ? "Närvarande" : "Frånvarande"}</p>
      <p>Chipnummer: {dog.chipNumber}</p>

      <h2>Ägare</h2>

      <p>
        {dog.owner.name} {dog.owner.lastName}
      </p>

      <p>Telefon: {dog.owner.phoneNumber}</p>

      <div className="buttons">
        <Link to="/dogs">
          <button>Tillbaka till katalogen</button>
        </Link>

        <Link to="/">
          <button>Startsida</button>
        </Link>
      </div>
    </div>
  );
}

export default DogDetails;