// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import bankReducer from '@/features/bankSlice';
import bankIdReducer from '@/features/BankIdSlice'

export const store = configureStore({
  reducer: {
    bank: bankReducer, 
    bankId: bankIdReducer
  },
});

export default store;
