import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function PrivateRoutes() {
  return !document.cookie.includes("auth_token") ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />
      <Outlet />
    </>
  );
}
