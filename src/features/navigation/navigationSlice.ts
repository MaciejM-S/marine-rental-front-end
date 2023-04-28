import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  userAccount: number;
  vesselAdded: boolean;
  vesselUpdated: boolean;
  vesselRemoved: boolean;
  mainNav: number;
};

const initialState: InitialState = {
  mainNav: 0,
  userAccount: 2,
  vesselAdded: false,
  vesselUpdated: false,
  vesselRemoved: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeMainNav: (state, action: PayloadAction<number>) => {
      return { ...state, mainNav: action.payload };
    },
    changeUserNav: (state, action: PayloadAction<number>) => {
      return { ...state, userAccount: action.payload };
    },
    changeVesselAdded: (state, action: PayloadAction<boolean>) => {
      return { ...state, vesselAdded: action.payload };
    },
    changeVesselUpdated: (state, action: PayloadAction<boolean>) => {
      return { ...state, vesselUpdated: action.payload };
    },
    changeVesselRemoved: (state, action: PayloadAction<boolean>) => {
      return { ...state, vesselRemoved: action.payload };
    },
  },
});

export default navigationSlice.reducer;
export const {
  changeUserNav,
  changeVesselAdded,
  changeVesselUpdated,
  changeVesselRemoved,
  changeMainNav,
} = navigationSlice.actions;
