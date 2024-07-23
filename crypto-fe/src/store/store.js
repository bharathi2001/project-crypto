import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './stockSlice';
import localStorageMiddleware from '../middleware/localStorageMiddleware';
 
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
 
const preloadedState = loadState();
 
const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});
 
export default store;