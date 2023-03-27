import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h3>Tech+10)</h3>
      </Link>
      <ul>
        <h3>
          <CustomLink to="/categoria/notebooks"> Notebooks</CustomLink>
        </h3>
        <h3>
          <CustomLink to="/categoria/smartphones"> Smartphones</CustomLink>
        </h3>
        <h3>
          {" "}
          <CustomLink to="/cart">
            {" "}
            <CartWidget />{" "}
            <span className="item__total"></span>
          </CustomLink>
        </h3>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
