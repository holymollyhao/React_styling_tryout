import React from "react";
import "./App.scss";
import Button from "./component/Button";
import Circle from "./component/divStyle";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="blue" fullWidth>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="gray" fullWidth>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button
          color="pink"
          onClick={() => console.log("clickady clack")}
          fullWidth
        >
          BUTTON
        </Button>
      </div>
      <Circle color="black" size="huge" />
      <Circle color="black" />
    </div>
  );
}

export default App;
