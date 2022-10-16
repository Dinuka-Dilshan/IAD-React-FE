import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Announcements from "./pages/Announcements";
import AvailableCourses from "./pages/AvailableCourses";
import Course from "./pages/Course";
import Login from "./pages/Login";
import MainLayout from "./pages/MainLayout";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "mycourses",
        element: <MyCourses />,
      },
      {
        path: "availablecourses",
        element: <AvailableCourses />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "mycourses/:id",
        element: <Course />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
