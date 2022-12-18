import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlBase } from "../../../helpers/config";

const initialState = {
  dataDigimon: [],
  digimonFiltrados: [],
  loading: false,
};

export const digimonSlice = createSlice({
  name: "digimons",
  initialState,
  reducers: {
    setDataDigimon: (state, action) => {
      state.dataDigimon = action.payload;
      state.digimonFiltrados = action.payload;
    },
    setDataDigimonFilter: (state, action) => {
      //filtrar a los digimons por nombre
      const nombre = action.payload;
      const digimon = state.digimonFiltrados
      const filtrados = digimon.filter((digimon) => digimon.name.toLowerCase().includes(nombre.toLowerCase()));
      state.dataDigimon = filtrados;
    },
  },
});

//Obtenemos los digimons de la api
export const getDigimon = () => async (dispatch) => {
  const { data } = await axios.get(`${urlBase}api/digimon`);

  dispatch(setDataDigimon(data));
  //   console.log(data);
};

export const { setDataDigimon, setDataDigimonFilter } = digimonSlice.actions;
export default digimonSlice.reducer;
