import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function NavBar({ locale, onLocaleChange }) {
  return (
    <div>
      <Link to="/">[<FormattedMessage id="navbar.lnk-home"/>] </Link>
      <Link to="/examples">[<FormattedMessage id="navbar.lnk-examples"/>] </Link>
      <select value={locale} onChange={(e) => onLocaleChange(e.target.value)}>
        <option value="en-US">EN</option>
        <option value="es-CL">ES</option>
      </select>
      <hr />
    </div>
  );
}
