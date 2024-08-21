import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="h-6 border-b shadow">
      <nav>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Store"}>Store</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
      </nav>
    </div>
  );
};
