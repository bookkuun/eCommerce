import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import useGetMeQuery from "./useGetMeQuery";
import { useLocation, useNavigate } from "react-router-dom";
import { clearUser, setUser } from "@/redux/user/user.slice";

function useAuthenticate() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const { data, isLoading, error } = useGetMeQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !user.isAuthenticated) {
      dispatch(
        setUser({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          avatar: data.avatar,
          role: data.role,
        })
      );
    }
  }, [dispatch, data, user.isAuthenticated]);

  useEffect(() => {
    if (!isLoading && !user.isAuthenticated && !data) {
      navigate("/sign-in", { replace: true });
    }
  }, [user, navigate, isLoading, data]);

  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/admin" &&
      data &&
      user &&
      user.isAuthenticated &&
      user.user.role === "USER"
    ) {
      navigate("/");
    }
  }, [data, user, navigate, location]);

  useEffect(() => {
    if (error) {
      dispatch(clearUser());
    }
  }, [error, dispatch]);

  return { isLoading, error };
}

export default useAuthenticate;
