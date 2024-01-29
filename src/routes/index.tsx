import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
//const Home = lazy(() => wait(1000).then(() => import("../pages/Home")));
const Examples = lazy(() => import("../pages/Examples"));
const ErrorNotFound = lazy(() => import("../pages/ErrorNotFound"));
import AppLayout from "../layouts/AppLayout";
import ErrorBoundary from "../utils/ErrorBoundry";
import FallbackComponent from "../components/FallbackComponent";

function Router({
  locale,
  onLocaleChange,
}: {
  locale: string;
  onLocaleChange: (locale: string) => void;
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary
            fallback={FallbackComponent({ message: "App Layout Error" })}
          >
            <AppLayout locale={locale} onLocaleChange={onLocaleChange} />
          </ErrorBoundary>
        }
      >
        <Route
          path="/"
          element={
            <ErrorBoundary
              fallback={FallbackComponent({ message: "Home Error" })}
            >
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/examples"
          element={
            <ErrorBoundary
              fallback={FallbackComponent({ message: "Examples Error" })}
            >
              <Examples />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <ErrorBoundary
              fallback={FallbackComponent({ message: "ErrorNotFound Error" })}
            >
              <ErrorNotFound />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}
export default Router;

/*
 * Function to test suspense lazy loading
function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
*/
