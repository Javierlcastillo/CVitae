import { useLocation, Link } from "react-router-dom";
import "./BreadCrumbs.css"; // si quieres estilo propio

function Breadcrumbs() {
  const location = useLocation();

  // Divide el pathname en segmentos
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs">
      <ul>
        <li><Link to="/" className="link">Home</Link></li>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to}>
              {isLast ? (
                <span>{decodeURIComponent(value)}</span>
              ) : (
                <Link to={to}>{decodeURIComponent(value)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
