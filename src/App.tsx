import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card ";
import Input from "./components/Input";

interface People {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [people, setPeople] = useState<People[]>([]);
  const [obj, setObj] = useState<People>({} as People);

  const handleAddPeople = (obj: People) => {
    setPeople([obj]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="InputsBox">
          <Input
            placeholder="Name"
            label="Nome"
            onChange={(e) => setObj({ ...obj, name: e.target.value })}
          />
          <Input
            placeholder="Age"
            label="Idade"
            type="number"
            onChange={(e) => setObj({ ...obj, age: Number(e.target.value) })}
          />
          <Input
            placeholder="Hobby"
            label="Hobby"
            onChange={(e) => setObj({ ...obj, hobby: e.target.value })}
          />

          <button onClick={() => handleAddPeople(obj)}>Enviar</button>
        </div>
        {people[0] && (
          <Card
            name={people[0].name}
            age={people[0].age}
            hobby={people[0].hobby}
          />
        )}
      </header>
    </div>
  );
}

export default App;
