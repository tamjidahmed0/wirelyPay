// store/slices/bankSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBankId: '', // Store only the bankId
};

const bankSlice = createSlice({
  name: 'bankId',
  initialState,
  reducers: {
    setSelectedBankId: (state, action) => {
      state.selectedBankId = action.payload;
    },
  },
});

export const { setSelectedBankId } = bankSlice.actions;
export default bankSlice.reducer;
