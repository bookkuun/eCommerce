import authApi from "@/apis/authApi";
import { useAppDispatch } from "@/redux/hook";
import { showToast } from "@/redux/toast/toast.slice";
import { setUser } from "@/redux/user/user.slice";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useLoginMutation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (authData: ILoginPayload) => {
      const response = await authApi.login(authData);
      return response;
    },
    onSuccess: async (data) => {
      console.log("success", data);
      const myInfo = await authApi.getMe();

      dispatch(
        setUser({
          firstName: myInfo.firstName,
          lastName: myInfo.lastName,
          email: myInfo.email,
          avatar: myInfo.avatar,
          role: myInfo.role,
        })
      );

      dispatch(
        showToast({ message: "Login successfully", severity: "success" })
      );

      navigate("/products");
    },
    onError: (error) => {
      console.log("Login failed", error);
      dispatch(showToast({ message: "Login failed", severity: "error" }));
    },
  });
  return mutation;
}

export default useLoginMutation;
