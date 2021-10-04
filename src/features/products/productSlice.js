import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productAPI';

const initialState = {
    products: [
      {value: 0},
      {value: 1}
    ],
    status: 'idle',

  };

  export const getProductsAsync = createAsyncThunk(
    'product/getProducts',
    async () => {
      const response = await getProducts();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );


  export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    
      
    },
    extraReducers: (builder) => {
      builder
      
        .addCase(getProductsAsync.pending , (state) => {
          state.status = 'loading';
        })
        .addCase(getProductsAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.products = action.payload;
        })
        
    },
  });


export const selectProduct = (state) => state.products;

export default productSlice.reducer;

