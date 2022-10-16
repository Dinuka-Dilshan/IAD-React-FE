import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";

interface Props {
  redirectPath: string;
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ redirectPath, children }) => {

 const {user} = useUser();

  if (!user.studentName) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
