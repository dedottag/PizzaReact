import "./app.scss";
import Pizzas from "../pizzas";
import { useEffect, useState } from "react";
import Skeleton from "../pizza-skeleton";
import Header from "../header";
import NotFound from "../not-found";
import { Routes, Route } from "react-router-dom";
import Basket from "../basket";
// import ButtonsGroup from "../buttons-group";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [sortProperty, setSortproperty] = useState("rating");
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);

  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";
    const catgory = categories > 0 ? `&category=${categories}` : "";
    const sort = `&sortBy=${sortProperty}`;

    const URL = `https://64e59c1609e64530d17ebff0.mockapi.io/items?page=${currentPage}&limit=4${catgory}${sort}${search}&order=desc`;
    console.log(URL);
    fetch(URL)
      .then((data) => data.json())
      .then((res) => {
        setPizzas(res);
        // console.log(res);
      })
      .then(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [categories, searchValue, sortProperty, currentPage]);

  return (
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/basket" element={<Basket pizzas={pizzas} />} />
        <Route
          path="/"
          element={
            <>
              {loading ? (
                <Skeleton pizzas={pizzas} />
              ) : (
                <Pizzas
                  setSortproperty={setSortproperty}
                  pizzas={pizzas}
                  onClickCategory={(id) => setCategories(id)}
                  active={categories}
                  setLoading={(meaning) => setLoading(meaning)}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
