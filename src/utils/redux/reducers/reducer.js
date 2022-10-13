import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    res :[]
}

const sliceState = createSlice ({
    name : "state",
    initialState : initialState,
    reducers : {
        setPokemon : ( state, action ) => {
            state.setPokemon = action.payload;
        }
    },
});

const reducer = {
    state : sliceState.reducer
};

export const setPokemon  = sliceState.actions;
export default reducer;