import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export type InitialState = {
  criterion: string;
  city: string | undefined;
  size: string | undefined;
  type: string | undefined;
  pickupDay: string;
  returnDay: string;
};

const initialState: InitialState = {
  criterion: "The date: oldest first",
  city: undefined,
  size: undefined,
  type: undefined,
  pickupDay: dayjs().format("YYYY-MM-DD"),
  returnDay: dayjs().add(1, "day").format("YYYY-MM-DD"),
};

export const navigationSlice = createSlice({
  name: "criterions",
  initialState,
  reducers: {
    changeCitySort: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, city: action.payload };
    },
    changeSizeSort: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, size: action.payload };
    },
    changeTypeSort: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, type: action.payload };
    },
    changePickupDaySort: (state, action: PayloadAction<string>) => {
      return { ...state, pickupDay: action.payload };
    },
    changeReturnDaySort: (state, action: PayloadAction<string>) => {
      return { ...state, returnDay: action.payload };
    },
    changeCriterion: (state, action: PayloadAction<string>) => {
      return { ...state, criterion: action.payload };
    },
    resetSortCriterionsState: (state) => {
      return initialState;
    },
  },
});

export default navigationSlice.reducer;
export const {
  changeCitySort,
  changeTypeSort,
  changeSizeSort,
  changePickupDaySort,
  changeReturnDaySort,
  changeCriterion,
  resetSortCriterionsState,
} = navigationSlice.actions;
