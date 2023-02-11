import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import ItemsDisplay from "./components/ItemsDisplay";

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
  const initNumber = (totalNb) => Math.floor(Math.random() * (totalNb - 1) + 1);

  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(3);
  const [mouth, setMouth] = useState(1);
  const [eyebrows, setEyebrows] = useState(3);
  const [hat, setHat] = useState(4);
  const [glasses, setGlasses] = useState(9);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(3);
  const [clothing3, setClothing3] = useState(2);

  const randomize = () => {
    setBody(initNumber(total.body));
    // console.log(initNumber(total.body));
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
      <div className="header">
        Avatar generator
        <hr />
      </div>
      <div className="main-content">
        <div className="avatar-group">
          <div>
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              mouth={mouth}
              eyebrows={eyebrows}
              hat={hat}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              randomize={randomize}
            />
          </div>
          <div>
            <div className="list-section">
              <ItemsDisplay
                arrLength={total.body}
                title={"Body"}
                path={"character/body"}
                getIndex={setBody}
              />
              <ItemsDisplay
                arrLength={total.eyes}
                title={"Eyes"}
                path={"character/eyes"}
                getIndex={setEyes}
              />
              <ItemsDisplay
                arrLength={total.hair}
                title={"Hair"}
                path={"character/hair"}
                getIndex={setHair}
              />
              <ItemsDisplay
                arrLength={total.mouth}
                title={"Mouth"}
                path={"character/mouths"}
                getIndex={setMouth}
              />
              <ItemsDisplay
                arrLength={total.eyebrows}
                title={"Eyebrows"}
                path={"character/eyebrows"}
                getIndex={setEyebrows}
              />
              <ItemsDisplay
                arrLength={total.hat}
                title={"Hat"}
                path={"character/accessories/hats"}
                getIndex={setHat}
              />
              <ItemsDisplay
                arrLength={total.glasses}
                title={"Glasses"}
                path={"character/accessories/glasses"}
                getIndex={setGlasses}
              />
              <ItemsDisplay
                arrLength={total.clothing1}
                title={"Set clothes 1"}
                path={"character/clothes/layer_1"}
                getIndex={setClothing1}
              />
              <ItemsDisplay
                arrLength={total.clothing2}
                title={"Set clothes 2"}
                path={"character/clothes/layer_2"}
                getIndex={setClothing2}
              />
              <ItemsDisplay
                arrLength={total.clothing3}
                title={"Set clothes 3"}
                path={"character/clothes/layer_3"}
                getIndex={setClothing3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
