import { useState } from "react";
import "./one-pizza.scss";
let key = 0;

const OnePizza = ({ title, types, sizes, price, imageUrl }) => {
  const typeNames = ["тонкое", "традиционное"];
  const [active, setActive] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);

  return (
    <div className="pizza" key={key++}>
      <div className="pizza-image-container">
        <img className="pizza-image" src={imageUrl} alt="питса" />
        <div className="pizza-name">
          <span>{title}</span>
        </div>
      </div>
      <div className="pizza-choice-container">
        <div className="pizza-types">
          <ul>
            {types.map((type) => (
              <li
                className={active === type ? "active" : ""}
                key={key++}
                onClick={() => setActive(type)}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-sizes">
          <ul>
            {sizes.map((size, i) => (
              <li
                className={sizeActive === i ? "active" : ""}
                onClick={() => setSizeActive(i)}
                key={key++}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pizza-price-container">
        <div className="price">от {price} ₽</div>
        <button className="add-button" onClick={() => console.log("hi")}>
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default OnePizza;
