import "./App.css";
import React, { useState } from "react";
import Avatar from "./components/Avatar";
import RenderItem from "./components/RenderItem";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(2);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(2);
  const [mouth, setMouth] = useState(2);
  const [hat, setHat] = useState(2);
  const [eyebrows, setEyebrows] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const [clothing1, setClothing1] = useState(2);
  const [clothing2, setClothing2] = useState(2);
  const [clothing3, setClothing3] = useState(2);

  const initNumber = (arrLength) =>
    Math.floor(Math.random() * (arrLength - 1) + 1);

  const randomize = () => {
    setBody(initNumber(total.body));
    setEyes(initNumber(total.eyes));
    setHair(initNumber(total.hair));
    setMouth(initNumber(total.mouth));
    setEyebrows(initNumber(total.eyebrows));
    setHat(initNumber(total.hat));
    setGlasses(initNumber(total.glasses));
    setClothing1(initNumber(total.clothing1));
    setClothing2(initNumber(total.clothing2));
    setClothing3(initNumber(total.clothing3));
  };

  return (
    <div className="App">
      <div className="header">Avatar generator</div>
      <div className="divider"></div>
      <div className="wrapper-main">
        <div className="avatar-wrap">
          <div className="avatar">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              mouth={mouth}
              hat={hat}
              eyebrows={eyebrows}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
          </div>
          <div className="randomBtn" onClick={() => randomize()}>
            <button>Randomize</button>
          </div>
        </div>
        <div className="options">
          <div className="parts-list">
            <div>
              <a href="#Body"> Body</a>
            </div>
            <div>
              <a href="#Eyes"> Eyes</a>
            </div>
            <div>
              {" "}
              <a href="#Hair"> Hair</a>
            </div>
            <div>
              <a href="#Mouth"> Mouth</a>
            </div>
            <div>
              <a href="#Eyesbrows"> Eyesbrows</a>
            </div>
            <div>
              <a href="#Glasses"> Glasses</a>
            </div>
            <div>
              <a href="#Set clothes 1"> Set clothes 1</a>
            </div>
            <div>
              <a href="#Set clothes 2"> Set clothes 2</a>
            </div>
            <div>
              <a href="#Set clothes 3"> Set clothes 3</a>
            </div>
          </div>
          <div className="part-wrapper">
            <div className="item-display">
              <RenderItem
                arrLength={total.body}
                title={"Body"}
                path={"character/body"}
                getIndex={setBody}
              />

              <RenderItem
                arrLength={total.eyes}
                title={"Eyes"}
                path={"character/eyes"}
                getIndex={setEyes}
              />
              <RenderItem
                arrLength={total.hair}
                title={"Hair"}
                path={"character/hair"}
                getIndex={setHair}
              />
              <RenderItem
                arrLength={total.mouth}
                title={"Mouth"}
                path={"character/mouths"}
                getIndex={setMouth}
              />
              <RenderItem
                arrLength={total.eyebrows}
                title={"Eyesbrows"}
                path={"character/eyebrows"}
                getIndex={setEyebrows}
              />
              <RenderItem
                arrLength={total.hat}
                title={"Hat"}
                path={"character/accessories/hats"}
                getIndex={setHat}
              />
              <RenderItem
                arrLength={total.glasses}
                title={"Glasses"}
                path={"character/accessories/glasses"}
                getIndex={setGlasses}
              />
              <RenderItem
                arrLength={total.clothing1}
                title={"Set clothes 1"}
                path={"character/clothes/layer_1"}
                getIndex={setClothing1}
              />
              <RenderItem
                arrLength={total.clothing2}
                title={"Set clothes 2"}
                path={"character/clothes/layer_2"}
                getIndex={setClothing2}
              />
              <RenderItem
                arrLength={total.clothing3}
                title={"Set clothes 3"}
                path={"character/clothes/layer_3"}
                getIndex={setClothing3}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer" style={{ fontSize: "1.5rem" }}>
        Created by DuyenCao
      </div>
    </div>
  );
}

export default App;
