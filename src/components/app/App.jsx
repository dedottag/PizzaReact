import "./app.scss";
import Pizzas from "../pizzas";
import { useEffect, useState } from "react";
import Skeleton from "../pizza-skeleton";
import Header from "../header";
import NotFound from "../not-found";
import { Routes, Route } from "react-router-dom";
import Basket from "../basket";
import ButtonsGroup from "../buttons-group";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://64e59c1609e64530d17ebff0.mockapi.io/items";

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => setPizzas(res))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/"
          element={<>{loading ? <Skeleton /> : <Pizzas pizzas={pizzas} />}</>}
        />
      </Routes>
    </div>
  );
};

export default App;
