import { createSlice } from '@reduxjs/toolkit';
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const category = action.payload.category;
      const amount = action.payload.amount;
      const budgetItem = state.find(budget => budget.category === category);
      if(budgetItem) {
        budgetItem.amount = amount;
      }      
    } 
  },
});
export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;