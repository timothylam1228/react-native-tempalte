import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WorkshopPayload {
  attributes: WorkshopAttributes;
  id: number;
}

export interface WorkshopAttributes {
  name: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  thumbnail?: any;
  images?: any;
}

const WorkshopSlice = createSlice({
  name: 'workshop',
  initialState: { workshops: [], setSelectedWorkshop: null } as {
    workshops: WorkshopPayload[];
    setSelectedWorkshop: WorkshopPayload | null;
  },
  reducers: {
    setWorkshop: (state, action: PayloadAction<WorkshopPayload[]>) => {
      state.workshops = action.payload; // Assign the payload to the `workshops` property
    },
    setSelectedWorkshop: (state, action: PayloadAction<WorkshopPayload>) => {
      state.setSelectedWorkshop = action.payload; // Assign the payload to the `workshops` property
    },
  },
});

export const { setWorkshop } = WorkshopSlice.actions;

export default WorkshopSlice.reducer;
