import * as React from "react";
import ReactDOM from "react-dom";
import "./common.css";

const Popup = () => {
  return <>Hello popup</>;
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
