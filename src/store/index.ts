import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reservation } from "./slices/reservation";

export const store = configureStore({
  reducer: {
    reservation,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;