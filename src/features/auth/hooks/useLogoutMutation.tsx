import authApi from "@/apis/authApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useLogoutMutation() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await authApi.logout();
      return response;
    },
    onSuccess: () => {
      console.log("Logout successfully");
      navigate("/sign-in");
    },
    onError: () => {
      console.log("Logout failed");
    },
  });

  return mutation;
}

export default useLogoutMutation;
