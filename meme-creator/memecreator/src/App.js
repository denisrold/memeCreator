import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onClickExport = (e) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.href = img;
      link.download = "meme.jpg";
      link.click();
    });
  };
  return (
    <div className="App">
      <select onChange={(e) => setImagen(e.target.value)}>
        <option>Seleccionar meme</option>
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
        placeholder="linea 2"
        value={linea2}
        onChange={(e) => {
          setLinea2(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={onClickExport}>Exportar</button>
      <div className="meme" id="meme">
        <span>{linea2}</span>
        <br />
        <img src={"/img/" + imagen + ".jpg"} alt=""></img>
        <span>{linea1}</span>
      </div>
    </div>
  );
}

export default App;
