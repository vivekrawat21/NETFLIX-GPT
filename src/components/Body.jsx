import Browse from "../pages/Browse";
import Login from "../pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../pages/SignUp";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    }
  ]);
  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export default Body;
