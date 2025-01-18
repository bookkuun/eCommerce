import axiosClient from "./axiosClient";

const authApi = {
  register(data: IAuthPayload) {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },
  getMe() {
    const url = "/users/me";
    return axiosClient.get<unknown, IUserData>(url);
  },
};

export default authApi;
