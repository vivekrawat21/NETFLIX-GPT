import Browse from "./pages/Browse";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./utils/FIrebase";
import { setLogout, setToken, setUser } from "./utils/store/AuthSlice";



const App = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <div>
       
          <RouterProvider router={appRouter} />

      </div>
    </>
  );
};

export default App;
