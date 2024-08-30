import { Link } from "react-router-dom";
import { Container } from "./Container";
import Cart from "../pages/Cart";

export const Navbar = () => {
  return (
    <div className="h-10 border-b shadow flex items-center ">
      <Container>
        <div className="flex flex-row-reverse justify-between ">
          <ul className="flex">
            <li className="ml-4 mr-4">
              <Link to={"/"}>خانه</Link>
            </li>

            <li className="ml-4">
              <Link to={"/Store"}>فروشگاه</Link>
            </li>

            <li className="ml-4">
              <Link to={"/About"}>درباره</Link>
            </li>

            <li className="ml-4">
              <Link to={"/Contact"}>ارتباط با ما</Link>
            </li>
          </ul>
          <div>
            <Link to="./Cart">
              <button>سبد خرید</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
