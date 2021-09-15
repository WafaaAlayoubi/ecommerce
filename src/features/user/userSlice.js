import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signup } from './userAPI';

const initialState = {
    user: {},
    status: 'idle',

  };

  // export const signinAsync = createAsyncThunk(
  //   'counter/fetchCount',
  //   async (user) => {
  //     const response = await fetchCount(user);
  //     // The value we return becomes the `fulfilled` action payload
  //     return response.data;
  //   }
  // );

  export const signupAsync = createAsyncThunk(
    'user/signup',
    async () => {
      const response = await signup();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder
        // .addCase(signinAsync.pending, (state) => {
        //   state.status = 'loading';
        // })
        // .addCase(signinAsync.fulfilled, (state, action) => {
        //   state.status = 'idle';
        //   state.user = action.payload;
        // })
        .addCase(signupAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signupAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.user = action.payload;
        });
    },
  });

export const selectUser = (state) => state.user;

export default userSlice.reducer;

