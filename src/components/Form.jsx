import { Link } from "react-router-dom";
import { checkValidation } from "../utils/Validate";
import { EyeOff, Eye } from "lucide-react";
import { useRef, useState } from "react";
const LoginForm = ({ signup }) => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const Name = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const validation = checkValidation(emailValue, passwordValue);
    setError(validation);
  };
  return (
    <div className="flex justify-center items-center w-full ">
      <form
        className="w-full max-w-md bg-black bg-opacity-75  p-14 rounded-lg transform -translate-y-10 text-white "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup && (
          <>
            <input
              ref={Name}
              type="text"
              placeholder="First Name"
              className="mx-1 p-4 w-full rounded-md  bg-black bg-opacity-80"
            />
          </>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="mx-1 my-2 p-4 w-full rounded-md  bg-black bg-opacity-80"
        />

        <div className="relative mb-1 mx-1 w-full">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            className="p-4 w-full rounded-md bg-black text-white bg-opacity-75"
            placeholder="Password"
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
          className="mt-3 my-1 p-2 w-full bg-red-600 text-white rounded-lg mx-2 font-semibold mb-12 "
          onClick={handleButtonClick}
        >
          {signup ? "Sign Up" : "Sign In"}
        </button>
        <p className=" text-gray-400 mx-2">
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
    </div>
  );
};

export default LoginForm;
