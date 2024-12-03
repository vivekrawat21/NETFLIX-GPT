import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const useRouteSafe = (route) => {
    const { user } = useSelector((state) => state.auth);
    const nevigate = useNavigate();
    useEffect(() => {
        if (!user ) {
        nevigate("/signin");
        }
        if (!user && (route === "signup" )) {
        nevigate("/signup");
        }
        if (user) {
        nevigate("/browse");
        }
    }, [user,nevigate,route]);
    };