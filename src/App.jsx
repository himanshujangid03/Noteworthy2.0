import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./features/authentication/LoginForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import SignUpForm from "./features/authentication/SignupForm";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Folder from "./pages/Folder";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Activity from "./pages/Activity";
import Notes from "./features/Folder/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "folder",
        element: <Folder />,
      },
      { path: "folder/:folderId", element: <Notes /> },
      { path: "user", element: <User /> },
      { path: "activity", element: <Activity /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "/login", element: <LoginForm /> },
  { path: "/signup", element: <SignUpForm /> },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
