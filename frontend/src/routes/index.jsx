import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { customer } = useAuth()
  return <BrowserRouter>{customer ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
