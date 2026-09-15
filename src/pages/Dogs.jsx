import DogCard from "../components/DogCard";
import "../Dogs.css";

function Dogs({ dogs }) {
  return (
    <main className="dogs-page">
      <h1>Våra hundar</h1>
      <p className="dogs-page__intro">
        Här hittar du alla hundar på Doggy Daycare.
      </p>
    </main>
  );
}

export default Dogs;