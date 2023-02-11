import React from "react";

function Avatar(props) {
  return (
    <div>
      <img
        src={`./character/body/${props.body}.png`}
        alt=""
        style={{ zIndex: 0 }}
      />
      <img
        src={`./character/eyes/${props.eyes}.png`}
        alt=""
        style={{ zIndex: 3 }}
      />
      <img
        src={`./character/hair/${props.hair}.png`}
        alt=""
        style={{ zIndex: 2 }}
      />
      <img
        src={`./character/mouths/${props.mouth}.png`}
        alt=""
        style={{ zIndex: 6 }}
      />
      <img
        src={`./character/accessories/hats/${props.hat}.png`}
        alt=""
        style={{ zIndex: 3 }}
      />
      <img src={`./character/eyesbrow/${props.eyebrows}.png`} alt="" />
      <img
        src={`./character/accessories/glasses/${props.glasses}.png`}
        alt=""
      />
      <img
        src={`./character/clothes/layer_1/${props.clothing1}.png`}
        alt=""
        style={{ zIndex: 4 }}
      />
      <img
        src={`./character/clothes/layer_2/${props.clothing2}.png`}
        alt=""
        style={{ zIndex: 5 }}
      />
      <img
        src={`./character/clothes/layer_3/${props.clothing3}.png`}
        alt=""
        style={{ zIndex: 6 }}
      />
    </div>
  );
}

export default Avatar;
