import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "typeface-dm-sans";
import "typeface-roboto";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalsProvider } from "./context/modalsContext.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppointmentList from "./features/appointment/ui/appointment-list.tsx";
import ReviewList from "./features/review/ui/review-list.tsx";
import AdminRoute from "./components/AdminRoute.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        path: "appointments",
        element: <AppointmentList />,
      },
      {
        path: "reviews",
        element: <ReviewList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <RouterProvider router={router} />
    </ModalsProvider>
  </QueryClientProvider>
);
