import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Suspense } from "react";
import ErrorBoundary from "../utils/ErrorBoundry";
import FallbackComponent from "../components/FallbackComponent";

function AppLayout({
  locale,
  onLocaleChange,
}: {
  locale: string;
  onLocaleChange: (locale: string) => void;
}) {
  return (
    <div>
      <ErrorBoundary fallback={FallbackComponent({message:"NavBar error"})}>
        <NavBar locale={locale} onLocaleChange={onLocaleChange} />
      </ErrorBoundary>

      <ErrorBoundary fallback={FallbackComponent({message:"Outlet error"})}>
        <Suspense fallback={<h1>Loading route from AppLayout fallback</h1>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default AppLayout;
