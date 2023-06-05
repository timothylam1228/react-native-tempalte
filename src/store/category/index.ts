import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoryState {
  categories: CategoryPayload[];
}

export interface CategoryPayload {
  attributes: CategoryAttributes;
  id: number;
}

export interface CategoryAttributes {
  name: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryPayload[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
