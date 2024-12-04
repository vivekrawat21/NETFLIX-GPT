import { Link, useNavigate } from "react-router-dom";
import { checkValidation } from "../utils/Validate";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import {
  createUser,
  signInUser,
} from "../utils/FireBaseUtils/UserAuthentication";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../utils/FIrebase";

const LoginForm = ({ signup }) => {

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // State variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const validation = checkValidation(email, password);
    setError(validation);
    if (!validation) {
      if (signup) {
        try {
          const user = await createUser(auth, email, password, name);
          console.log(user);
          if (user) {
            toast.success("User created successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });

            
          }
        } catch (error) {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        } finally {
          setEmail("");
          setPassword("");
          setName("");
        }
      } else {
        try {
          const user = await signInUser(auth, email, password);
          if (user) {
            toast.success("User signed in successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          
          }
        } catch (error) {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        } finally {
          setEmail("");
          setPassword("");
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form className="w-full max-w-md bg-black bg-opacity-75 p-14 rounded-lg transform -translate-y-10 text-white">
        <h1 className="font-bold text-3xl py-4">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
            className="mx-1 my-2 p-4 w-full rounded-md bg-black text-white bg-opacity-80 
                   focus:bg-black focus:outline-none selection:bg-gray-600 selection:text-white"
            autoComplete="off"
          />
        )}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="mx-1 my-2 p-4 w-full rounded-md bg-black text-white bg-opacity-80 
                 focus:bg-black focus:outline-none selection:bg-gray-600 selection:text-white"
          autoComplete="off"
        />

        <div className="relative mb-1 mx-1 w-full">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mx-1 my-2 p-4 w-full rounded-md bg-black text-white bg-opacity-80 
               focus:bg-black focus:outline-none selection:bg-gray-600 selection:text-white"
            autoComplete="off"
          />
          {showPassword ? (
            <Eye
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <EyeOff
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        {error && (
          <p className="text-red-500 text-sm font-semibold ml-1">{error}</p>
        )}
        <button
          className="mt-3 my-1 p-2 w-full bg-red-600 text-white rounded-lg mx-2 font-semibold mb-12"
          onClick={handleButtonClick}
        >
          {signup ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-gray-400 mx-2">
          {signup ? "Already have an account? " : "New to NetflixGpt? "}
          {signup ? (
            <Link
              to={"/signin"}
              className="text-white font-semibold cursor-pointer"
            >
              Sign In now
            </Link>
          ) : (
            <Link
              to={"/signup"}
              className="text-white font-semibold cursor-pointer"
            >
              Sign Up now
            </Link>
          )}
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
