import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Suspense } from "react";

function AppLayout({locale, onLocaleChange}:{locale:string, onLocaleChange:(locale:string) => void}) {
  return (
    <div>
      <NavBar locale={locale} onLocaleChange={onLocaleChange}/>
      <Suspense fallback={<h1>Loading route from AppLayout fallback</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
