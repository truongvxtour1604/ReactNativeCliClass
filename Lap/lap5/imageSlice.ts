import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  uri: string | null;
}

const initialState: ImageState = {
  uri: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string | null>) => {
      state.uri = action.payload;
    },
    clearImage: (state) => {
      state.uri = null;
    },
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
