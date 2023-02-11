import React from "react";
import Item from "./Item";

function ItemsDisplay(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="list">
        {/* render array item */}
        {Array(props.arrLength)
          .fill(0)
          .map((item, index) => (
            <Item
              key={index}
              path={props.path}
              index={index + 1}
              part={props.title}
              getIndex={props.getIndex}
            />
          ))}
      </div>
    </>
  );
}

export default ItemsDisplay;
