import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlBase } from "../../../helpers/config";

const initialState = {
  dataDigimon: [],
  dataDigimonFilter: [],
  loading: false,
};

export const digimonSlice = createSlice({
  name: "digimons",
  initialState,
  reducers: {
    setDataDigimon: (state, action) => {
      state.dataDigimon = action.payload;
    },
    setDataDigimonFilter: (state, action) => {
      state.dataDigimonFilter = action.payload;
    },
  },
});

//Obtenemos los digimons de la api
export const getDigimon = () => async (dispatch) => {
  const { data } = await axios.get(`${urlBase}api/digimon`);

  dispatch(setDataDigimon(data));
  dispatch(setDataDigimonFilter(data));
  //   console.log(data);
};

export const { setDataDigimon, setDataDigimonFilter } = digimonSlice.actions;
export default digimonSlice.reducer;
