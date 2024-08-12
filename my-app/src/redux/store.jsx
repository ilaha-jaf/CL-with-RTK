import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apislice'; 
import favoritesReducer from './favoritesSlice';
import basketReducer from './basketSlice';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        favorites: favoritesReducer,
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store; // Default export
