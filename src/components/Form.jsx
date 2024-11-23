import { Link } from "react-router-dom";
const LoginForm = ({ signup }) => {
  return (
    <div className="flex justify-center items-center w-full ">
      <form className="w-full max-w-md bg-black bg-opacity-75  p-14 rounded-lg transform -translate-y-10 text-white ">
        <h1 className="font-bold text-3xl py-4">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="mx-1 p-4 w-full rounded-md  bg-black bg-opacity-80"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="mx-1 my-2 p-4 w-full rounded-md  bg-black bg-opacity-80"
        />
        <input
          type="password"
          className="mb-3 mx-1 p-4 w-full rounded-md bg-black text-white bg-opacity-75"
          placeholder="Password"
        />
        <button className="my-1 p-2 w-full bg-red-600 text-white rounded-lg mx-2 font-semibold mb-12">
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

