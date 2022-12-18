import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import Search from "./components/Search";
import {
  getDigimon,
  setDataDigimon,
  setDataDigimonFilter,
} from "./store/slice/digimon";

function App() {
  const { dataDigimon, dataDigimonFilter } = useSelector(
    (state) => state.digimons
  );
  const dispatch = useDispatch();
  const [nameDigimon, setNameDigimon] = useState("");

  useEffect(() => {
    dispatch(getDigimon());
  }, [dispatch]);

  //funcion para filtrar por nombre
  const handleInputChange = (e) => {
    setNameDigimon(e.target.value);
  };

  //funcion para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDataDigimonFilter(nameDigimon));
  };



  return (
    <div className="App">
      <div>
        <form id="formulario" onSubmit={(e) => handleSubmit(e)}>
          <input
            // className={styles.search}
            type="text"
            value={nameDigimon}
            placeholder="Buscar..."
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>

      {dataDigimon &&
        dataDigimon.map((digimon) => (
          <div key={digimon.name}>
            <h1>{digimon.name}</h1>
            <img src={digimon.img} alt="loqsea" />
          </div>
        ))}
    </div>
  );
}

export default App;
