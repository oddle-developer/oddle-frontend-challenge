import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";

const App = () => {
  const [state, setState] = useState("Rdev {^_^}/");

  return <button onClick={() => setState("React works!!")}>{state}</button>;
};

render(<App />, document.getElementById("root"));
