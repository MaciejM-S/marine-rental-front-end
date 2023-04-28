import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sizeConst, typeConst } from "../CONSTANTS";
import dayjs from "dayjs";

export type InitialState = {
  name: string|null;
  description: string|null;
  email: null | string;
  year:number|null;
  size:string;
  type:string;
  pictures:FileList|null;
  error: null | string;
  loading: boolean;
  uploaded: boolean;
  pricePerDay:number|null;
  pricePerWeek:number|null;
  location:string;
  editedVessel:string|null;
  pickupDay:string;
  returnDay:string;
};


const initialState: InitialState = {
  name: null,
  description: null,
  email: null,
  year:2022,
  size:sizeConst.SMALL,
  type:typeConst.SAILING,
  pictures:null,
  error: null,
  loading: false,
  uploaded: false,
  pricePerDay:null,
  pricePerWeek:null,
  location:'Barcelona',
  editedVessel:null,
  pickupDay:dayjs().format("YYYY-MM-DD"),
  returnDay:dayjs().add(3, 'month').format("YYYY-MM-DD"),
};

export const vesselSlice = createSlice({
  name: "vessel",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      return { ...state, name: action.payload };
    },
    addDescription: (state, action: PayloadAction<string>) => {
      return { ...state, description: action.payload };
    },
    addYear: (state, action: PayloadAction<number>) => {
      return { ...state, year: action.payload };
    },
    addSize:(state, action:PayloadAction<string>)=>{
      return{...state, size:action.payload}
    },
    addType:(state, action:PayloadAction<string>)=>{
      return{...state, type:action.payload}
    },
    addPictures:(state, action:PayloadAction<FileList| null>)=>{
      return{...state, pictures:action.payload}
    },
    addPricePerDay:(state, action:PayloadAction<number|null>)=>{
      return{...state, pricePerDay:action.payload}
    },
    addPricePerWeek:(state, action:PayloadAction<number|null>)=>{
      return{...state, pricePerWeek:action.payload}
    },
    addLocation:(state, action:PayloadAction<string>)=>{
      return{...state, location:action.payload}
    },
    addPickupDay:(state, action:PayloadAction<string>)=>{
      return{...state, pickupDay:action.payload}
    },
    addReturnDay:(state, action:PayloadAction<string>)=>{
      return{...state, returnDay:action.payload}
    },
    resetVessel:(state)=>{
      {return initialState}
    },
    editVessel:(state, action:PayloadAction<string|null>)=>{
      {return {...state, editedVessel:action.payload }}
    }
  },
  },
);

export default vesselSlice.reducer;
export const {addName, addDescription, addYear, addSize, addType, addPictures, addPricePerDay, addPricePerWeek, addLocation, resetVessel, editVessel, addPickupDay,addReturnDay } = vesselSlice.actions;