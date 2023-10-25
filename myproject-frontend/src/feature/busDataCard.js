import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading : false,
    data : [],
    error : ""
}

export const dataThunk = createAsyncThunk('feature/dataThunk', async() => {

try {
     const response = await axios.get(`http://localhost:3060/getCardDatas`);
     console.log(response,"featureData")
  return   response.data
} catch (error) {
console.log(error)
}
})

const cardSlicer  = createSlice({
name:"cardData",
initialState,
reducers:{

},
extraReducers:(builder) =>{
builder.addCase(dataThunk.pending, (state) => {
state.loading = true
})
builder.addCase(dataThunk.fulfilled, (state,action) => {
    state.loading = true
    state.data = action.payload
    state.error = ""
})
builder.addCase(dataThunk.rejected, (state) => {
state.loading = false
state.data = []
state.error = "{message: some error present in API call}"
})
}
})

export default cardSlicer.reducer