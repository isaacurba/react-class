import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            if (state.value >= 10) {
                alert("You have reached the maximum value of 10");
                return;
            }
            state.value += 1;
        },

        decrement: (state) => {
            if (state.value <= 0) {
                alert("You have reached the minimum value of 0");
                return;
            }
            state.value -= 1;
        },

        reset: (state) => {
            state.value = 0;
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;