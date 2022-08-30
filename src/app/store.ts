import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as cardsReducer } from './slices/cardsReducer';

export const store = configureStore({
  reducer: {
    cardsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
