import React from "react";

function Item(props) {
  return (
    <div>
      <img
        src={`./${props.path}/${props.index}.png`}
        alt=""
        width={100}
        onClick={() => props.getIndex(`${props.index}`)}
        className="background-dark
        "
      />
    </div>
  );
}

export default Item;
