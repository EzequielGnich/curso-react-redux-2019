import React from "react";
import ReactDOM from "react-dom";
// import { SilvaFamily } from "./silvaFamily";
import Family from "./Family";
import Member from "./member";

ReactDOM.render(
  <Family lastname="Silva">
    <Member name="Gustavo" />
    <Member name="Rafael" />
    <Member name="Amanda" />
  </Family>,
  document.getElementById("app")
);
