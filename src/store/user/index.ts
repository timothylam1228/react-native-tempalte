import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  createdAt: Date | null;
};
type UserPayload = {
  payload: Partial<UserState>;
};

const slice = createSlice({
  name: 'user',
  initialState: {
    displayName: null,
    email: null,
    photoURL: null,
    createdAt: null,
  } as UserState,
  reducers: {
    setUser: (state, { payload: { user } }: UserPayload) => {
      state.displayName = user.displayName;
    },
  },
});

export const { setUser } = slice.actions;
