import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function DefaultLayout() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </Fragment>
  );
}
