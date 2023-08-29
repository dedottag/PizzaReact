import "./pizzas.scss";
import OnePizza from "../one-pizza";
import ButtonsGroup from "../buttons-group";
import Pagination from "../pagination";

const Pizzas = ({
  pizzas,
  onClickCategory,
  active,
  setLoading,
  setSortproperty,
  setCurrentPage,
}) => {
  return (
    <>
      <ButtonsGroup
        onClickCategory={onClickCategory}
        active={active}
        setLoading={setLoading}
        setSortproperty={setSortproperty}
      />
      <h1 className="pizzas-category-tittle">{"Все"}</h1>
      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <OnePizza key={pizza.id} {...pizza} />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Pizzas;
