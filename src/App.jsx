import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./pages/Dogs";
import DogDetails from "./pages/DogDetails";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data.record);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doggy-daycare" element={<Home />} />
        <Route path="/dogs" element={<Dogs dogs={dogs} />} />
        <Route path="/dogs/:chipNumber" element={<DogDetails dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;