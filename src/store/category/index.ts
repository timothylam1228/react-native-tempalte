import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CategoryState = {
  categories: CategoryPayload[];
};
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

const categorySlice = createSlice({
  name: 'category',
  initialState: { categories: [], setSelectedCategories: [] } as {
    categories: CategoryPayload[];
    setSelectedCategories: CategoryPayload[];
  },
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryPayload[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategories: (
      state,
      action: PayloadAction<CategoryPayload[]>,
    ) => {
      state.setSelectedCategories = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
