import Logo from "../assets/Netflix_Logo_CMYK.png";
import ProfileLogo from "../assets/Netflix.jpeg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FIrebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../utils/store/AuthSlice";
import { useLocation } from "react-router-dom";
const Header = () => {
 const dispatch = useDispatch();
  const nevigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  const location = useLocation();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setLogout());
      nevigate("/signin");
    });
  };

  return (
    <div className="bg-gradient-to-b from-black z-10  absolute w-full  px-7 py-4 flex justify-between">
      <img src={Logo} alt="logo" className="w-56" />

      {user? (
        <div className="flex p-4  ">
          <img src={ProfileLogo} alt="profile" className="h-12 w-12 mr-2" />
          <button
            className="text-white text-xl text-center font-bold"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      ) : (location.pathname==="/" && (
        <div className="flex p-4">
          <button
            className="text-white text-xl text-center font-bold bg-black rounded-lg px-2 hover:bg-gray-900"
            onClick={() => nevigate("/signin")}
          >
            Sign In
          </button>
          <button
            className="text-white text-xl text-center font-bold bg-black rounded-lg px-2 ml-2 hover:bg-gray-900"
            onClick={() => nevigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      )

      )}
    </div>
  );
};

export default Header;
