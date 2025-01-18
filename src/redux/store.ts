import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "@/redux/toast/toast.slice";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
