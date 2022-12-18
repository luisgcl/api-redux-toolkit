import { configureStore } from "@reduxjs/toolkit";
import digimons from "./slice/digimon/index.js";

export default configureStore({
  reducer: {
    digimons,
  },
});
