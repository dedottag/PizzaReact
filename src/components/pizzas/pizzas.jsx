import "./pizzas.scss";
import OnePizza from "../one-pizza";
import pizzas from "../assets/pizzas.json";
console.log(pizzas);

let key = 0;

const Pizzas = () => {
  return (
    <div className="pizzas-container">
      {pizzas.map((pizza) => (
        <OnePizza key={key++} {...pizza} />
      ))}
    </div>
  );
};

export default Pizzas;
