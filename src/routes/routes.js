import { Home } from "../components/Home";
import {Login} from "../components/Login";
import AuthLayout from "../layouts/Auth";

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/auth/login" />,
  },
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth/login",
        exact: true,
        component: Login,
      }
    ],
  },
];
