import { useState } from "react";
import "../assets/css/styles.css";
import Animal from "./components/Animal";
import AnimalsGrid from "./components/AnimalsGrid";
import Result from "./components/Result";
import { animals } from "./assets/data/AnimalsDb";

function App() {
  const selectRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);

    return animals[randomIndex].name;
  };
  const [result, setResult] = useState("");
  const [randomAnimal, setRandomAnimal] = useState(selectRandomAnimal());
  const [selectedAnimal, setSelectedAnimal] = useState("");

  const checkResult = (selectedAnimal) => {
    if (selectedAnimal === randomAnimal) {
      setResult("win");

      setTimeout(() => {
        setResult("");
        setRandomAnimal(selectRandomAnimal());
      }, 500);
    } else {
      setResult("lose");
    }
  };

  return (
    <div className="container">
      <header className="border-orange">
        <h1>ANIMAL MATCHING GAME</h1>
      </header>

      <div className="board">
        <Result result={result} />
        <Animal
          animals={animals}
          randomAnimal={randomAnimal}
          setRandomAnimal={setRandomAnimal}
        />
      </div>
    </div>
  );
}

export default App;
