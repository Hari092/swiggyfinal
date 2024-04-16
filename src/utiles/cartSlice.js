
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCost: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, count: 1 }; 
      state.items.push(newItem);
      state.totalCost += newItem.card.info.price / 100;
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const removedItem = state.items.find(a => a.card.info.id === itemIdToRemove);
      if (removedItem) {
        state.totalCost -= (removedItem.card.info.price * removedItem.count) / 100;
        state.items = state.items.filter(a => a.card.info.id !== itemIdToRemove);
      }
    },
    clearItem: (state) => {
      state.items = [];
      state.totalCost = 0;
    },
    increaseItemCount: (state, action) => {
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.items.find(a => a.card.info.id === itemIdToIncrease);
      if (itemToIncrease) {
        itemToIncrease.count++;
        state.totalCost += itemToIncrease.card.info.price / 100;
      }
    },
    decreaseItemCount: (state, action) => {
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.items.find(a => a.card.info.id === itemIdToDecrease);
      if (itemToDecrease && itemToDecrease.count > 1) {
        itemToDecrease.count--;
        state.totalCost -= itemToDecrease.card.info.price / 100;
      }
    },
  },
});

export const { addItem, removeItem, clearItem, increaseItemCount, decreaseItemCount } = cartSlice.actions;
export default cartSlice.reducer;
