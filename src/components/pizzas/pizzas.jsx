import "./pizzas.scss";
import OnePizza from "../one-pizza";
import ButtonsGroup from "../buttons-group";

const Pizzas = ({ pizzas }) => {
  return (
    <>
      <ButtonsGroup />
      <h1>Все пиццы</h1>
      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <OnePizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </>
  );
};

export default Pizzas;
