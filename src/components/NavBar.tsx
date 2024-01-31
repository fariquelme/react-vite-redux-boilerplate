import { Navbar } from "flowbite-react";
import { FormattedMessage } from "react-intl";
import LangSwitch from "./LangSwitch";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const navigation = [
  { name: "navbar.lnk-home", href: "/", current: true },
  { name: "navbar.lnk-examples", href: "/examples", current: false },
];

type NavBarPropsType = {
  locale: string;
  onLocaleChange: (locale: string) => void;
};

export default function NavBar({ locale, onLocaleChange }: NavBarPropsType) {
  const location = useLocation();
  return (
    <Navbar fluid rounded className="shadow-lg">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          className="h-8 w-auto"
          src="/ttv_logo.svg"
          alt="Transforma Tu Vida"
        />
        <span className="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Transforma Tu Vida
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <LangSwitch locale={locale} onLocaleChange={onLocaleChange} />
        <Navbar.Toggle className="text-gray-800" />
      </div>
      <Navbar.Collapse>
        {navigation.map((item) => (
          <NavLink to={item.href}>
            <Navbar.Link
              key={item.name}
              href={item.href}
            >
              <span className={twMerge("rounded-md p-2 hover:bg-gray-100 hover:text-gray-900", location.pathname===item.href?"font-bold":"")}>
              <FormattedMessage id={item.name} />
              </span>
            </Navbar.Link>
          </NavLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
