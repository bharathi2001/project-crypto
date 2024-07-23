import { createSlice } from '@reduxjs/toolkit';
 
 const initialState = {
  symbol: 'BTC',
  data: [],
  loading: false,
};
 
const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setStockData(state, action) {
      state.data = action.payload;
    },
    changeSymbol(state, action) {
      state.symbol = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  },
});
 
export const { setStockData, changeSymbol, setLoading } = stockSlice.actions;
 
export const selectStockData = (state) => state.stock.data;
export const selectStockSymbol = (state) => state.stock.symbol;
export const selectStockLoading = (state) => state.stock.loading;
 
export default stockSlice.reducer;