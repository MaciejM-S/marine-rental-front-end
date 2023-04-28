import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { Vessel as VesselType } from "../../typings/vessel";

export type InitialState = {
  city: string | undefined;
  size: string | undefined;
  type: string | undefined;
  pickupDay: string;
  returnDay: string;
  vessels: [VesselType] | undefined;
  vesNum: number | undefined;
  currentPage: number;
};

const initialState: InitialState = {
  city: undefined,
  size: undefined,
  type: undefined,
  pickupDay: dayjs().format("YYYY-MM-DD"),
  returnDay: dayjs().add(1, "day").format("YYYY-MM-DD"),
  vessels: undefined,
  vesNum: undefined,
  currentPage: 1,
};

export const navigationSlice = createSlice({
  name: "criterions",
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, city: action.payload };
    },
    changeSize: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, size: action.payload };
    },
    changeType: (state, action: PayloadAction<string | undefined>) => {
      return { ...state, type: action.payload };
    },
    changePickupDay: (state, action: PayloadAction<string>) => {
      return { ...state, pickupDay: action.payload };
    },
    changeReturnDay: (state, action: PayloadAction<string>) => {
      return { ...state, returnDay: action.payload };
    },
    changeVessels: (state, action: PayloadAction<[VesselType] | undefined>) => {
      return { ...state, vessels: action.payload };
    },
    changeVesNum: (state, action: PayloadAction<number | undefined>) => {
      return { ...state, vesNum: action.payload };
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload };
    },
    resetCriterionState: (state) => {
      return initialState;
    },
  },
});

export default navigationSlice.reducer;
export const {
  changeCity,
  changeType,
  changeSize,
  changePickupDay,
  changeReturnDay,
  changeVessels,
  changeVesNum,
  changeCurrentPage,
  resetCriterionState,
} = navigationSlice.actions;
