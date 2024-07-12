import { instance } from "@/shared/api/auth/auth";
import { UserDataType } from "@/shared/types/userDataTypes";

export const AuthService = {
  async registration({ username, email, password }: UserDataType) {
    const { data } = await instance.post<UserDataType>("register", {
      username,
      email,
      password,
    });
    return data;
  },

  async login({ email, password }: UserDataType) {
    const { data } = await instance.post("login", { email, password });
    localStorage.setItem("token", data.token);
    return data;
  },

  async getMe() {
    const token = localStorage.getItem("token");
    const { data } = await instance.get<UserDataType>(`user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};
