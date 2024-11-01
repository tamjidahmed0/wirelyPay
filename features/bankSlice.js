// src/features/bank/bankSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bankDetails: {},  // Initialize with an empty object instead of null
};

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    setBankDetails: (state, action) => {
      state.bankDetails = action.payload;  // Store the entire object returned from the server
    },
    clearBankDetails: (state) => {
      state.bankDetails = {};  // Reset the bank details if needed
    },
  },
});

export const { setBankDetails, clearBankDetails } = bankSlice.actions;

export default bankSlice.reducer;
