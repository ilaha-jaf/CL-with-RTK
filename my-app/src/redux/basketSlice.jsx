import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            state.push(action.payload);
        },
        removeBasket: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;