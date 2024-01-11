import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Suspense } from "react";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<h1>Loading route from AppLayout fallback</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
