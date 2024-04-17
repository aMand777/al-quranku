import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialPreload {
  isPreload: boolean;
}

const initialState: InitialPreload = {
  isPreload: true,
};

const preloadSlice = createSlice({
  name: 'preload',
  initialState,
  reducers: {
    setPreload: (state, action: PayloadAction<boolean>) => {
      state.isPreload = action.payload;
    },
  },
});

export const { setPreload } = preloadSlice.actions;

export default preloadSlice.reducer;
