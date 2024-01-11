import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
//const Home = lazy(() => wait(1000).then(() => import("../pages/Home")));
const Examples = lazy(() => import("../pages/Examples"));
const ErrorNotFound = lazy(() => import("../pages/ErrorNotFound"));
import AppLayout from "../layouts/AppLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Route>
    </Routes>
  );
};
export default Router;

/*
 * Function to test suspense lazy loading
function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
*/
