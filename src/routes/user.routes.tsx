import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import authApi from "@/apis/authApi";
import { setUser } from "@/redux/user/user.slice";
import { useAppDispatch } from "@/redux/hook";

function UserRoutes() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["me"],
    queryFn: authApi.getMe,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        avatar: data?.avatar,
        role: data?.role,
      })
    );
  }, [dispatch, data]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error...</>;
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserRoutes;
