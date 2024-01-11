import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      Nav Bar<span> </span>
      <Link to="/">[Home] </Link>
      <Link to="/examples">[Examples] </Link>
      <hr />
    </div>
  );
}
