import { Link } from "react-router-dom";
import { Container } from "./Container";
import Cart from "../pages/Cart";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { cartQty } = useShoppingCartContext();

  return (
    <div className="h-10 border-b shadow flex items-center">
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
          <div className="relative">
            <Link to="./Cart">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </button>
              <span className="absolute w-4 h-4 -top-1 -right-2 font-bold text-xs rounded-full text-white bg-orange-500 flex justify-center items-center">
                {cartQty !== 0 ? cartQty : " "}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
