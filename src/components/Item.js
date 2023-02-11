import React from "react";

function Item(props) {
  return (
    <div className="item-image">
      <img
        src={`./${props.path}/${props.index}.png`}
        alt=""
        width={40}
        onClick={() => props.getIndex(`${props.index}`)}
      />
    </div>
  );
}

export default Item;
