import authApi from "@/apis/authApi";
import { useAppDispatch } from "@/redux/hook";
import { showToast } from "@/redux/toast/toast.slice";
import { setUser } from "@/redux/user/user.slice";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useRegisterMutation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (authData: IAuthPayload) => {
      const response = await authApi.register(authData);
      return response;
    },
    onSuccess: async () => {
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
        showToast({ message: "Sign up successfully", severity: "success" })
      );

      navigate("/products");
    },
    onError: () => {
      console.log("Sign up failed");
      dispatch(showToast({ message: "Sign up failed", severity: "error" }));
    },
  });
  return mutation;
}

export default useRegisterMutation;
