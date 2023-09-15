import { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  return (
    <div className="App">
      <select>
        <option value="futurama">Futurama</option>
        <option value="fire">Casa en llamas</option>
        <option value="history">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="smart">Smart Guy</option>
        <option value="philosoraptor">Philosoraptor</option>
      </select>
      <br />
      <input
        type="text"
        placeholder="linea 1"
        value={linea1}
        onChange={(e) => {
          setLinea1(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="linea 1"
        value={linea2}
        onChange={(e) => {
          setLinea2(e.target.value);
        }}
      ></input>
      <br />
      <button>Exportar</button>
      <div>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src="" alt=""></img>
      </div>
    </div>
  );
}

export default App;
