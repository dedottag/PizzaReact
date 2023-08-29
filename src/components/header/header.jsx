import "./header.scss";
import Logo from "./pizza-logo.svg";
import { Link } from "react-router-dom";
import cart from "./cart.svg";
import Search from "../search";

const Header = ({ setSearchValue, searchValue }) => {
  return (
    <>
      <div className="header-container">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="tittle-container">
            <img className="logo-pizza" src={Logo} alt="logo" />
            <div className="tittle">
              <span style={{ fontWeight: "bold" }}>REACT PIZZA</span>
              <span style={{ color: "rgb(134, 134, 134)" }}>
                самая вкусная пицца во вселенной
              </span>
            </div>
          </div>
        </Link>
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
        <Link to="/basket">
          <div className="basket-container">
            <div className="basket">
              <button className="basket-button">
                520 ₽ | <img src={cart} alt="cart" /> 3
              </button>
            </div>
          </div>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Header;
