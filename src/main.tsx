import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the App component
import UserRoutes from "@/routes/user.routes.tsx";
import ProductList from "@/features/product/components/ProductList.tsx";
import SignUpPage from "@/features/auth/pages/SignUpPage.tsx";
import SignInPage from "./features/auth/pages/SignInPage";

// Import the Store
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Toast from "./components/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoutes />,
    children: [
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "profile",
        element: <div>User Profile</div>,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toast />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
