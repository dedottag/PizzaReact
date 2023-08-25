import styles from "./basket.module.scss";
import { useState } from "react";
import Img from "./empty-cart.png";
import { Link } from "react-router-dom";

const Basket = () => {
  const [lenght, setLength] = useState(true);

  return (
    <div className={styles["basket-container"]}>
      <div className={styles["no-purchases-container"]}>
        <h1>Корзина пустая😕</h1>
        <h2>
          Вероятней всего, вы не заказывали еще пицуу. Для того, чтобы заказать
          пиццу, перейдите на главную страницу
        </h2>
        <img className={styles["img"]} src={Img} alt="фото" />
        <Link to="/">
          <div>
            <button className={styles["back-to-home-button"]}>
              Вернуться назат
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
