"use client";
import React, { useState } from "react";

const DualListBox = () => {
  const [leftItems, setLeftItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [rightItems, setRightItems] = useState([]);

  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
  const [selectedRightItems, setSelectedRightItems] = useState([]);

  const handleCheckboxChange = (item, box) => {
    if (box === "left") {
      if (selectedLeftItems.includes(item)) {
        setSelectedLeftItems((prevItems) =>
          prevItems.filter((i) => i !== item)
        );
      } else {
        setSelectedLeftItems((prevItems) => [...prevItems, item]);
      }
    } else {
      if (selectedRightItems.includes(item)) {
        setSelectedRightItems((prevItems) =>
          prevItems.filter((i) => i !== item)
        );
      } else {
        setSelectedRightItems((prevItems) => [...prevItems, item]);
      }
    }
  };

  const moveRight = () => {
    setLeftItems((prevItems) =>
      prevItems.filter((item) => !selectedLeftItems.includes(item))
    );
    setRightItems((prevItems) => [...prevItems, ...selectedLeftItems]);
    setSelectedLeftItems([]);
  };

  const moveLeft = () => {
    setRightItems((prevItems) =>
      prevItems.filter((item) => !selectedRightItems.includes(item))
    );
    setLeftItems((prevItems) => [...prevItems, ...selectedRightItems]);
    setSelectedRightItems([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <h2>Left Box</h2>
        <ul>
          {leftItems.map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                checked={selectedLeftItems.includes(item)}
                onChange={() => handleCheckboxChange(item, "left")}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={moveRight}>{">"}</button>
        <button onClick={moveLeft}>{"<"}</button>
      </div>

      <div
        style={{ marginLeft: "20px" }}
        className="border-4 border-emerald-800 p-8 rounded"
      >
        <h2>Right Box</h2>
        <ul>
          {rightItems.map((item) => (
            <li key={item}>
              <input
                type="checkbox"
                checked={selectedRightItems.includes(item)}
                onChange={() => handleCheckboxChange(item, "right")}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DualListBox;
