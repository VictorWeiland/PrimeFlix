import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Link className="logo " to="/">
        {" "}
        PrimeFlix{" "}
      </Link>
      <Link className="favoritos " to="/favoritos">
        {" "}
        Meus Favoritos{" "}
      </Link>
    </header>
  );
}
