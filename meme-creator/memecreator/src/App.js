import logo from "./logo.svg";
import "./App.css";

function App() {
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
      <input type="text"></input>
      <br />
      <input type="text"></input>
      <br />
      <button>Exportar</button>
    </div>
  );
}

export default App;
