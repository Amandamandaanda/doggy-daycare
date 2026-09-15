import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data.record);
      });
  }, []);

  return <Home />;
}

export default App;