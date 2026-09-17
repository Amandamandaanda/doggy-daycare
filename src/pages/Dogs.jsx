import { useState } from "react";
import DogCard from "../components/DogCard";
import "../Dogs.css";
import Header from "../components/Header";

function Dogs({ dogs }) {
  const [selectedBreed, setSelectedBreed] = useState("Alla");

  const breeds = [
    ...new Set(dogs.map((dog) => dog.breed)),
  ].sort((a, b) => a.localeCompare(b));

  const filteredDogs =
    selectedBreed === "Alla"
      ? dogs
      : dogs.filter((dog) => dog.breed === selectedBreed);

  return (
    <main className="dogs-page">
      <Header />

      <h1>Våra hundar</h1>

      <p className="dogs-page__intro">
        Här hittar du alla hundar på Doggy Daycare.
      </p>

      <div className="dogs-page__filter">
        <label htmlFor="breed-filter">
          Filtrera efter ras:
        </label>

        <select
          id="breed-filter"
          value={selectedBreed}
          onChange={(event) => setSelectedBreed(event.target.value)}
        >
          <option value="Alla">Alla raser</option>

          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="dogs-page__grid">
        {filteredDogs.map((dog) => (
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
