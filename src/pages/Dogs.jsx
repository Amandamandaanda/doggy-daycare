import DogCard from "../components/DogCard";
import "../Dogs.css";
import Header from "../components/Header";

function Dogs({ dogs }) {
  return (
    <main className="dogs-page">
       <Header />
      <h1>Våra hundar</h1>

      <p className="dogs-page__intro">
        Här hittar du alla hundar på Doggy Daycare.
      </p>

      <div className="dogs-page__grid">
        {dogs.map((dog) => (
          <DogCard
            key={dog.chipNumber}
            dog={dog}
          />
        ))}
      </div>
    </main>
  );
}

export default Dogs;