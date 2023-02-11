import React from "react";

function Avatar({
  body,
  eyes,
  hair,
  mouth,
  eyebrows,
  hat,
  glasses,
  clothing1,
  clothing2,
  clothing3,
  randomize,
}) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img
          src={`./character/body/${body}.png`}
          alt=""
          width={200}
          style={{ zIndex: 0 }}
        />

        <img
          src={`./character/eyes/${eyes}.png`}
          alt=""
          width={200}
          style={{ zIndex: 7 }}
        />

        <img
          src={`./character/hair/${hair}.png`}
          alt=""
          width={200}
          style={{ zIndex: 1 }}
        />
        <img
          src={`./character/mouths/${mouth}.png`}
          alt=""
          width={200}
          style={{ zIndex: 2 }}
        />
        <img
          src={`./character/eyebrows/${eyebrows}.png`}
          alt=""
          width={200}
          style={{ zIndex: 1 }}
        />
        <img
          src={`./character/accessories/hats/${hat}.png`}
          alt=""
          width={200}
          style={{ zIndex: 10 }}
        />
        <img
          src={`./character/accessories/glasses/${glasses}.png`}
          alt=""
          width={200}
          style={{ zIndex: 1 }}
        />
        <img
          src={`./character/clothes/layer_1/${clothing1}.png`}
          alt=""
          width={200}
          style={{ zIndex: 3 }}
        />
        <img
          src={`./character/clothes/layer_2/${clothing2}.png`}
          alt=""
          width={200}
          style={{ zIndex: 4 }}
        />
        <img
          src={`./character/clothes/layer_3/${clothing3}.png`}
          alt=""
          width={200}
          style={{ zIndex: 5 }}
        />
      </div>
      <div className="text-center">
        <button className="randomBtn" onClick={() => randomize()}>
          Randomize
        </button>
      </div>
    </div>
  );
}

export default Avatar;
