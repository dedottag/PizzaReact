import "./buttons-group.scss";
import { useState } from "react";
import Sort from "../sort";

let key = 0;
const ButtonsGroup = () => {
  const [active, setActive] = useState(0);

  const buttonsNames = [
    "Все",
    "Мясные",
    "Вегетарианкая",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="buttons-container">
      <ul>
        {buttonsNames.map((button, i) => (
          <li
            className={active === i ? "button active" : "button"}
            onClick={() => {
              setActive(i);
            }}
            key={key++}
          >
            {button}
          </li>
        ))}
      </ul>
      <Sort />
    </div>
  );
};

export default ButtonsGroup;
