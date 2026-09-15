import { Link } from "react-router-dom";

function DogCard({ dog }) {
  return (
    <article className="dogs-page__card">
      <Link to={`/dogs/${dog.chipNumber}`}>
        <div className="dogs-page__photo">
          <img src={dog.img} alt={dog.name} />
        </div>

        <div className="dogs-page__info">
          <h2>{dog.name}</h2>
          <p>{dog.breed}</p>
          <p>{dog.age} år</p>
        </div>
      </Link>
    </article>
  );
}

export default DogCard;