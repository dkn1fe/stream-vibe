import { createSlice } from "@reduxjs/toolkit";
import { UserDataType, UserDataTypeSlice } from "@/shared/types/userDataTypes";
import { AuthService } from "@/service/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: UserDataTypeSlice = {
  userData: {
    color: null,
  } as UserDataType,
  token: "" as string,
  notificationAuth: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.userData = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
      state.userData = null;
    },
    setColor(
      state: { userData: UserDataType },
      { payload }: { payload: string }
    ) {
      state.userData.color = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.token = action.payload.token as string;
      state.notificationAuth = "success";
    });
    builder.addCase(registration.rejected, (state) => {
      state.notificationAuth = "failed";
    });
    builder.addCase(loginSistem.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.token = action.payload.token as string;
      state.notificationAuth = "success";
      state.isAuth = true;
    });
    builder.addCase(loginSistem.rejected, (state) => {
      state.notificationAuth = "failed";
      state.isAuth = false;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.isAuth = true;
      state.userData = action.payload;
    });
  },
});

export const registration = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }: UserDataType) => {
    const data = await AuthService.registration({ username, email, password });
    return data;
  }
);

export const loginSistem = createAsyncThunk(
  "auth/login",
  async ({ email, password }: UserDataType) => {
    const data = await AuthService.login({ email, password });
    return data;
  }
);

export const getProfile = createAsyncThunk("auth/getUser", async () => {
  const data = await AuthService.getMe();
  return data;
});

export const { login, logout, setColor } = authSlice.actions;

export default authSlice.reducer;
