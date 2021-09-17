import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signupGoogleAuth, signupEmailAndPassword, signinEmailAndPassword } from './userAPI';

const initialState = {
    user: {
      auth: true
    },
    status: 'idle',

  };

  export const signinEmailAndPasswordAsync = createAsyncThunk(
    'user/signinEmailAndPassword',
    async (account) => {
      const response = await signinEmailAndPassword(account);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const signupGoogleAuthAsync = createAsyncThunk(
    'user/signupGoogleAuth',
    async () => {
      const response = await signupGoogleAuth();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const signupEmailAndPasswordAsync = createAsyncThunk(
    'user/signupEmailAndPassword',
    async (account) => {
      const response = await signupEmailAndPassword(account);
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
        .addCase(signinEmailAndPasswordAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signinEmailAndPasswordAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.user = action.payload;
        })
        
        .addCase(signupGoogleAuthAsync.pending || signupEmailAndPasswordAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signupGoogleAuthAsync.fulfilled || signupEmailAndPasswordAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.user = action.payload;
        });
    },
  });


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

