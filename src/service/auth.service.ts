import { onChangeEmail } from "@/app/store/AuthSlice";
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

  async changeName({ name }: { name: string }) {
    const token = localStorage.getItem("token");
    const { data } = await instance.patch(
      "user/name",
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },

  async changeEmail({ email }: { email: string }) {
    const token = localStorage.getItem("token");
    const { data } = await instance.patch(
      "user/email",
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },

  async changePhone({ phone }: { phone: string }) {
    const token = localStorage.getItem("token");
    const { data } = await instance.patch(
      "user/phone",
      {
        phone,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },

  async changeImage(img: File) {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("img", img, "image.png");
    console.log(formData);
    const { data } = await instance.patch(
      "user/img",
      {
        formData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  },
};
