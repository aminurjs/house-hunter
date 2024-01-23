import { Navigate } from "react-router-dom";
import useUser from "../Hooks/useUser";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, isPending } = useUser();

  if (isPending || user === undefined) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
