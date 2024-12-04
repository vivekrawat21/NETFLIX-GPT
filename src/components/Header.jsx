import Logo from "../assets/Netflix_Logo_CMYK.png";
import ProfileLogo from "../assets/Netflix.jpeg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FIrebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../utils/store/AuthSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, setToken } from "../utils/store/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            uid: user.uid,
            emailVerified: user.emailVerified,
          })
        );
        dispatch(setToken(user.accessToken));
        if (location.pathname !== "/") {
          setTimeout(() => {
            nevigate("/browse");
          }, 800);
        }
      } else {
        dispatch(setLogout());
        setTimeout(() => {
          if (location.pathname !== "/") {
            nevigate("/signin");
          }
        }, 800);
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setLogout());
    });
  };

  return (
    <div className="bg-gradient-to-b from-black z-10  absolute w-full  px-7 py-4 flex justify-between">
      <img src={Logo} alt="logo" className="w-56" />

      {user ? (
        <div className="flex p-4  ">
          <img src={ProfileLogo} alt="profile" className="h-12 w-12 mr-2" />
          <button
            className="text-white text-xl text-center font-bold"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      ) : (
        location.pathname === "/" && (
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
