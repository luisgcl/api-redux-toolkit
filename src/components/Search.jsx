import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDigimon } from "../store/slice/digimon";

export default function Search() {
  const dispatch = useDispatch();
  const { dataDigimon } = useSelector((state) => state.digimons);
  const [buscarDigimon, setBuscarDigimon] = useState([]);
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(getDigimon());

    dataDigimon.filter((dato) => dato.name.toLowerCase());
    console.log(name);
    document.getElementById("formulario").reset();
  }

  //   let results = [];
  //   if (!name) {
  //     results = dataDigimon;
  //   } else {
  //     dataDigimon.filter((dato) =>
  //       dato.name.toLowerCase().includes(name.toLowerCase())
  //     );
  //   }

  return (
    <div>
      <form id="formulario" onSubmit={(e) => handleSubmit(e)}>
        <input
          // className={styles.search}
          type="text"
          //   value={name}
          placeholder="Buscar..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
