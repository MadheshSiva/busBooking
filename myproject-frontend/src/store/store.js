import {configureStore} from "@reduxjs/toolkit"
import CardReducer from "../feature/busDataCard"

const Store = configureStore({

    reducer:{
      card: CardReducer
    }
})

export default Store;