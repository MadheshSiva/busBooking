import {configureStore} from "@reduxjs/toolkit"
import CardReducer from "../feature/busDataCard"
import busDetails from "../feature/busDetails";

const Store = configureStore({

    reducer:{
      card: CardReducer,
      bus : busDetails
    }
})

export default Store;