import axiosClient from "@/apis/axiosClient";

const productApi = {
  getAll: () => {
    const url = "products";
    return axiosClient.get(url);
  },
};

export default productApi;
