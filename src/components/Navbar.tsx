import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="">  
         <nav >
      <Link to={"/Home"}>Home</Link>
      <Link to={"/Store"}>Store</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
    </nav>
    </div>
  
  );
};
