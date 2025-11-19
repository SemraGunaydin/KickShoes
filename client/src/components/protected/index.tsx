import type { FC } from "react";
import useUser from "../../service/user";
import Loader from "../loader";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header";

interface Props {
  allowedRoles?: string[];
}

const Protected: FC<Props> = ({ allowedRoles }) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <Loader />;

  // login yok → login sayfasına gönder
  if (!user) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
	if (allowedRoles.includes("admin")) {
	  return <Navigate to="/admin/login" replace />;
	}
	return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Protected;