import { Link } from "react-router-dom";

function DogCard({ dog }) {
  return (
    <article className="dogs-page__card">
      <Link to={`/dogs/${dog.chipNumber}`}>
        <div className="dogs-page__photo">
           <img
                src={dog.img || "/doggy-daycare/placeholder-dog.png"}
                alt={dog.name}
                onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/doggy-daycare/placeholder-dog.png";
                }}
            />
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
