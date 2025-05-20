import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CarouselDefault from "./components/CarouselDefault";
import BrowseTasks from "./pages/BrowseTasks/BrowseTasks";
import PrivateRoute from "./pages/Private/PrivateRoute ";
import AddTask from "./pages/Private/AddTask";
import MyTasks from "./pages/Private/MyTasks";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import TaskDetails from "./pages/Private/TaskDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CarouselDefault />,
      },
      {
        path: "browse-tasks",
        element: <BrowseTasks />,
      },
      {
        path: "add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "my-posted-tasks",
        element: (
          <PrivateRoute>
            <MyTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/TaskDetails/:id",
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export { router };
