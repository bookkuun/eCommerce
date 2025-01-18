import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserData {
  email?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role?: string;
}

interface IUserPayload {
  user: IUserData;
  isAuthenticated: boolean;
}

const initialState: IUserPayload = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    role: "USER",
  },
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
