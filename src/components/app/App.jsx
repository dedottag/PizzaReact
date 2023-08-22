import "./app.scss";
import Pizzas from "../pizzas";
import ButtonsGroup from "../buttons-group";

const App = () => {
  return (
    <div className="app">
      <ButtonsGroup />
      <Pizzas />
    </div>
  );
};

export default App;
