import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    busData  : []
}


const busDetails = createSlice({
    name :"busDetails",
    initialState,
    reducers : {
        deails : (state, action) => {
            state.busData = action.payload
        },
         
    }

}
    )

export const {deails} = busDetails.actions
    export default busDetails.reducer

