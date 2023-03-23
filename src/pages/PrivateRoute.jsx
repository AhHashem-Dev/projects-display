import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const {
    user: { nickname: username },
  } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser(username));
  }, []);

  return children;
};
export default PrivateRoute;
