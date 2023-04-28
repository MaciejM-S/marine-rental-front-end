import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import vesselReducer from '../features/vessel/vesselSlice'
import navigationReducer from '../features/navigation/navigationSlice';
import criterionsReducer from '../features/criterions/criterionsSlice';
import sortCriterionsReducer from '../features/criterions/sortCriterionsSlice';

 const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
  reducer: {
   user:userReducer,
   vessel:vesselReducer,
   navigation:navigationReducer,
   criterions:criterionsReducer,
   sortCriterions:sortCriterionsReducer,
  }, 
  devTools:false
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export default store