import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import CarouselDefault from "./components/CarouselDefault";
import BrowseTasks from "./pages/BrowseTasks/BrowseTasks";
import AddTask from "./pages/Private/AddTask";
import MyTasks from "./pages/Private/MyTasks";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import TaskDetails from "./pages/Private/TaskDetails";
import UpdateTask from "./pages/Private/UpdateTask";
import PrivateRoute from "./pages/Private/PrivateRoute ";
import NotFound from "./pages/Shared/NotFound";
import TestimonialsSection from "./components/TestimonialsSection";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
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
      {
        path: "/update-task/:id",
        loader: ({ params }) => {
          // console.log(params);
          return fetch(
            `https://ferelancemarketplace.vercel.app/add-task/${params.id}`
          );
        },

        Component: UpdateTask,
      },
      {
        path: "/my-posted-tasks/:Email",
        element: (
          <PrivateRoute>
            <MyTasks />
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
