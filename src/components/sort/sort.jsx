import "./sort.scss";
import { useState } from "react";

const Sort = ({ setSortproperty }) => {
  const [sort, setSort] = useState(false);
  const [choice, setChoice] = useState("популярности");
  const [active, setActive] = useState(0);

  const words = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  return (
    <div className="sort-container">
      <div>
        {sort && <span style={{ fontSize: "10px" }}>▼ </span>}
        {!sort && <span style={{ fontSize: "10px" }}>▲ </span>}
        <span>сортировка по: </span>
      </div>
      <div className="choice">
        <span onClick={() => setSort(!sort)}>{choice}</span>
        {sort && (
          <div className="choice-container">
            <ul>
              {words.map((obj, i) => (
                <li
                  className={active === i ? "list-active" : ""}
                  key={i}
                  onClick={() => {
                    setSort(false);
                    setChoice(obj.name);
                    setActive(i);
                    setSortproperty(obj.sortProperty);
                  }}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
