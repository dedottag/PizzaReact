import styles from "./basket.module.scss";
import { useState } from "react";
import Img from "./empty-cart.png";
import { Link } from "react-router-dom";
import trash from "./trash.svg";
import cart from "./cart.svg";

const Basket = ({ pizzas }) => {
  const [lenght, setLength] = useState(true);

  return (
    <div className={styles["basket-container"]}>
      {!lenght && (
        <div className={styles["no-purchases-container"]}>
          <h1>Корзина пустая😕</h1>
          <h2>
            Вероятней всего, вы не заказывали еще пицуу. Для того, чтобы
            заказать пиццу, перейдите на главную страницу
          </h2>
          <img className={styles["img"]} src={Img} alt="фото" />
          <Link to="/">
            <div>
              <button className={styles["back-to-home-button"]}>
                Вернуться назад
              </button>
            </div>
          </Link>
        </div>
      )}

      {lenght && (
        <div className={styles["purchases-container"]}>
          <div className={styles["basket-header"]}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              <img src={cart} alt="cart" /> Корзина
            </span>
            <button className={styles["clear-basket"]}>
              <img src={trash} alt="trash"></img> Очистить корзину
            </button>
          </div>
          {pizzas.slice(0, 3).map((pizza) => (
            <div className={styles["purchas"]} key={pizza.id}>
              <hr
                style={{
                  height: "0.1px",
                  border: "1px, solid, rgb(134, 134, 134, 0.608)",
                }}
              />
              <div className={styles["pizza-choice-container"]}>
                <img
                  className={styles["pizza-img"]}
                  src={pizza.imageUrl}
                  alt="pizza"
                />
                <div className={styles["pizza-name-container"]}>
                  <div className={styles["pizza-name"]}>{pizza.title}</div>
                  <div className={styles["pizza-choice"]}>
                    <span>токое тесто, 26см</span>
                  </div>
                </div>
              </div>
              <div className={styles["pizza-quantity-container"]}>
                <div className={styles["buttons-container"]}>
                  <button>-</button>2<button>+</button>
                </div>
                <div className={styles["pizza-price"]}>{pizza.price} ₽</div>
                <button className={styles["delete-pizza-button"]}>x</button>
              </div>
            </div>
          ))}
          <div className={styles["footer-container"]}>
            <div className={styles["quantity-pizzas-container"]}>
              <span className={styles["quantity-pizzas"]}>
                Всего пицц: <span style={{ fontWeight: "bold" }}>3шт</span>
              </span>
              <span className={styles["amount-orde"]}>
                Сумма заказа:{" "}
                <span
                  style={{ color: "rgb(235, 106, 54)", fontWeight: "bold" }}
                >
                  900 ₽
                </span>
              </span>
            </div>
            <div className={styles["actions-buttons"]}>
              <Link to={"/"}>
                <button className={styles["back-button"]}>
                  {"< Вернуться назад"}
                </button>
              </Link>
              <button className={styles["pay-button"]}>Оплатить сейчас</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
