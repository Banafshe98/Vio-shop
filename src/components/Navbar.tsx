import { Link } from "react-router-dom";
import { Container } from "./Container";

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
            <button>سبد خرید</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
