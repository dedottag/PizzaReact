import "./sort.scss";
import { useState } from "react";

const Sort = () => {
  const [sort, setSort] = useState(false);
  const [choice, setChoice] = useState("популярности");
  const [active, setActive] = useState(0);

  const words = ["популярности", "цене", "алфавиту"];

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
              {words.map((word, i) => (
                <li
                  className={active === i ? "list-active" : ""}
                  key={i}
                  onClick={() => {
                    setSort(false);
                    setChoice(word);
                    setActive(i);
                  }}
                >
                  {word}
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
