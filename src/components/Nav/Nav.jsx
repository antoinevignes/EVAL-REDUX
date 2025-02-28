import { NavLink } from "react-router";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <NavLink to={"/"}>Accueil</NavLink>
      <NavLink to={"/add"}>Ajouter un post</NavLink>
    </nav>
  );
}
