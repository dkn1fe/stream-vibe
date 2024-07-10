import { instance } from "@/shared/api/auth/auth";
import { UserDataTypes } from "@/shared/types/userDataTypes";

export const AuthService = {
  async registration({ username, email, password }: UserDataTypes) {
    const { data } = await instance.post<UserDataTypes>("register", {
      username,
      email,
      password,
    });
    return data;
  },

  async login({ email, password }: UserDataTypes) {
    const { data } = await instance.post("login", { email, password });
    localStorage.setItem("token", data.token);
    return data;
  },

  async getMe() {
    const token = localStorage.getItem("token");
    const { data } = await instance.get(`user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
