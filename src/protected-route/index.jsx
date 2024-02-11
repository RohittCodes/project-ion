import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute = ({ children }) => {
  let location = useLocation();

  // Checking authentication
  let logStatus = Cookies.get("Login");

  // Authentication type ?? "/students" or "/admin"
  let AuthStatus = Cookies.get("Auth");

  console.log(logStatus);

  if (logStatus) {
    if (location.pathname.startsWith(AuthStatus)) {
      return children;
    }
    // Routing to specific route based on authentication type
    return <Navigate to={`${AuthStatus}`} />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default ProtectedRoute;
