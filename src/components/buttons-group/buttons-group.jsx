import "./buttons-group.scss";
import Sort from "../sort";

let key = 0;
const ButtonsGroup = ({
  onClickCategory,
  active,
  setLoading,
  setSortproperty,
}) => {
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
      <>
        <ul>
          {buttonsNames.map((button, i) => (
            <li
              className={active === i ? "button active" : "button"}
              onClick={() => {
                onClickCategory(i);
                setLoading(true);
              }}
              key={key++}
            >
              {button}
            </li>
          ))}
        </ul>
      </>
      <Sort setSortproperty={setSortproperty} />
    </div>
  );
};

export default ButtonsGroup;
