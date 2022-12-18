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

  const [digimons, setDigimons] = useState(dataDigimon);

  const [digimonsFilter, setDigimonsFilter] = useState(dataDigimonFilter);

  const [nameDigimon, setNameDigimon] = useState("");

  useEffect(() => {
    dispatch(getDigimon());
    // dispatch(setDigimons(dataDigimon));
    // dispatch(setDigimonsFilter(dataDigimonFilter));
  }, []);

  function handleInputChange(e) {
    setNameDigimon(e.target.value);
    filtrar(e.target.value);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(getDigimon());

    // dataDigimon.filter((ssdato) => dato.name);
    // document.getElementById("formulario").reset();

    // filtrar(e.target.value);
    // setNameDigimon("");
    // setNameDigimon(filtrar);
    // console.log(nameDigimon);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = digimonsFilter.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setDigimons(dataDigimon);
    setDigimonsFilter(dataDigimonFilter);
    setDataDigimon(resultadosBusqueda);
    console.log(digimons);
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
