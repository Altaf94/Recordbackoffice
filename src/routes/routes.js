import { Redirect } from "react-router";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import Table from "../components/Table";
import AuthLayout from "../layouts/Auth";
import DashboardLayout from "../layouts/Dashboard";
import NewEmail from "../Container/NewEmailPagination/NewEmail";
import Dashboard from "../layouts/Dashboard";
import createUser from "../Container/CreateUser/CreateUserScreen";
import CreateUserScreen from "../Container/CreateUser/CreateUserScreen";

export const routes = [
  {
    path: "/",
    exact: true,
    component: (props) =>
      !props.isAuthenticated ? <Login /> : <Redirect to="/dashboard" />,
  },
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth/login",
        exact: true,
        component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    routes: [
      {
        path: "/dashboard",
        exact: true,
        component: (props) =>
          props.isAuthenticated ? <Dashboard /> : <Redirect to="/auth/login" />,
      },
    ],
  },
  {
    path: "/newemail",
    component: NewEmail,
    routes: [
      {
        path: "/newemail",
        exact: true,
        component: (props) =>
          props.isAuthenticated ? <NewEmail /> : <Redirect to="/auth/login" />,
      },
    ],
  },
  {
    path: "/createUser",
    component: CreateUserScreen,
    routes: [
      {
        path: "/createUser",
        exact: true,
        component: (props) =>
          props.isAuthenticated ? (
            <CreateUserScreen />
          ) : (
            <Redirect to="/auth/login" />
          ),
      },
    ],
  },
];
