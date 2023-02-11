import React from "react";
import Item from "./Item";

function RenderItem(props) {
  return (
    <div>
      <h2 id={props.title}>{props.title}</h2>
      <div className="item-list">
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
    </div>
  );
}

export default RenderItem;
